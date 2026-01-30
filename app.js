const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require("express-session");

const Listing = require("./models/listing.js");
const Order = require("./models/order.js");
const FraudLog = require("./models/FraudLog.js");
const fraudCheck = require("./utils/fraudEngine");
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");
const { isUserLoggedIn } = require("./middleware/auth");

const MONGO_URL = 'mongodb://127.0.0.1:27017/trustcart';


main()
  .then(() => {
    console.log("connected to db");
})
 .catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine" ,"ejs");
app.set("views" , path.join(__dirname , "views"));
app.engine('ejs' , ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({ extended: true }));
app.use( 
    session({
    secret: "trustcart_secret_key",
    resave: false,
    saveUninitialized: false
  }));
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});
app.use("/", authRoutes);
app.use("/admin", adminRoutes);
app.use(express.static("public"));


app.get("/" , (req,res) => {
   res.render("home");
});

app.get("/listings", isUserLoggedIn, async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

 
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    id = id.trim(); 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log(`Error: ID "${id}" is not valid`); // Debugging log
        return res.status(400).send("Invalid Listing ID");
    }

    const listing = await Listing.findById(id);
    
    if (!listing) {
        return res.status(404).send("Listing not found");
    }

    res.render("listings/show", { listing });
});

// Show checkout page
app.get("/listings/:id/pay", async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.render("listings/pay", { listing });
});

// transaction trigger route
app.post("/listings/:id/pay", async (req, res) => {
    
    try{
        let { id } = req.params;
    const { fullName , phone , address , email ,paymentMethod } = req.body;

    if (!fullName || !phone || !address || !paymentMethod) {
       return res.status(400).send("All fields are required");
   }

    const listing = await Listing.findById(id);

    if (!listing) {
        return res.status(404).send("Product not found");
    }

    const previousAttempts = await FraudLog.countDocuments({
      phone,
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
    });

    const recentOrders = await Order.countDocuments({
      "customer.phone": phone,
      createdAt: { $gte: new Date(Date.now() - 10 * 60 * 1000) }
    });
    console.log(" Starting fraud analysis");

    // fraud engine call
    const fraudResult = fraudCheck({
        listing ,
        paymentMethod,
        recentOrders,
        previousAttempts,email
    });

    const riskLevel = fraudResult.riskScore >= 80 ? "HIGH": fraudResult.riskScore >= 50 ? "MEDIUM":"LOW";

    // Blocked
    if(fraudResult.status === "BLOCKED" ){
        await FraudLog.create({
            userName : fullName,
            phone,
            email,
            amount : listing.price,
            reasons : fraudResult.reasons,
            fraudScore : fraudResult.riskScore,
            riskLevel,
            status : "BLOCKED"
        });
        console.log(" BLOCKING TRANSACTION");

        return res.render("orders/blocked", {
        reasons: fraudResult.reasons
        });

    }

    //Safe 
    const order =  new Order({
    product : listing._id,
    productName : listing.name,
    price : listing.price,
    paymentMethod,
    status : paymentMethod === "COD" ? "CONFIRMED" : "PENDING",
    customer : {fullName , phone, address , email}
});

    console.log("Payment route hit");
    await order.save();
    res.redirect(`/orders/${order._id}/success`);

    console.log("Price:", listing.price);
    console.log("Payment Method:", paymentMethod);

    
} catch(err){
    console.log(err);
    res.status(500).send("Something went wrong");
}
});

// order-success page
app.get("/orders/:id/success", async (req, res) => {
    const { id } = req.params;
    const order = await Order.findById(id);

    if (!order) {
        return res.status(404).send("Order not found");
    }
    res.render("orders/success", { order });
});


//status page 
app.get("/orders/:id" , async(req,res) => {
    const order = await Order.findById(req.params.id);
    if(!order) return res.status(404).send("Order not found");
    res.render("orders/show" , {order});
});

// for login page 
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});







// app.get("/testListing" , async(req , res) => {cs
//     let sampleListing = new Listing ({
//         name : "top",
//         description  : "wearable ",
//         type : "clothes",
//         price : "500" ,
//         category : "wearable ",
//         availiablity : "available" ,
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing ");
// });

app.listen(8080 , () => {
    console.log("server is on 8080");
});

