const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing"
    },
    productName: String,
    price: Number,
    paymentMethod: String,
    status: String,
    customer: {
        fullName: String,
        phone: String,
        address: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Order", orderSchema);
