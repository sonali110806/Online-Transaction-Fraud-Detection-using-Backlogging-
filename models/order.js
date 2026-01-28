const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
        required: true
    },
    productName: String,
    price: Number,
    paymentMethod: String,
    status: {
        type :String,
        default :"Pending" ,
    customer: {
        fullName: String,
        phone: String,
        address: String,
        email : String ,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        timestamps : true
    }}
});

module.exports = mongoose.model("Order", orderSchema);
