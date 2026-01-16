const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const Order = require("./models/order.js");

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


app.get("/" , (req,res) => {
    res.send("hi i am root");
});

app.get("/listings" , async(req,res) => {
   const allListings = await Listing.find({});
   res.render("listings/index.ejs" , { allListings });
 });
 
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;

    // STEP 1: Remove the space immediately
    id = id.trim(); 

    // STEP 2: Now check if the CLEAN id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log(`Error: ID "${id}" is not valid`); // Debugging log
        return res.status(400).send("Invalid Listing ID");
    }

    // STEP 3: Find the listing
    const listing = await Listing.findById(id);
    
    // STEP 4: Handle if listing was deleted or doesn't exist
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
    let { id } = req.params;
    const { fullName , phone , address , email ,paymentMethod } = req.body;

    const listing = await Listing.findById(id);

    if (!listing) {
        return res.status(404).send("Product not found");
    }

    let status = "Pending";
    if (paymentMethod === "COD") {
        status = "confirmed";
    }

    const order = new Order({
        productId : listing._id,
        productName: listing.name,
        price: listing.price,
         paymentMethod ,
          status,
        customer: {
            fullName ,
            phone ,
            address,
            email,
        } 
    });
    await order.save();
    res.redirect(`/orders/${order._id}/success`);
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