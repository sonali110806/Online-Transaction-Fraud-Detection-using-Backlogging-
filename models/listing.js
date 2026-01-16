const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  description: String,

  image: {
    filename: {
      type: String,
      default: "no-image",
    },
    url: {
      type: String,
      default: "https://icraftsgallery.com/assets/img1/no-result.png",
      set: (v) =>
        v === ""
          ? "https://icraftsgallery.com/assets/img1/no-result.png"
          : v,
    },
  },

  type: String,
  price: Number,
  category: String,
  availability: {
    type: String,
    default: "In Stock",
  },
}, { timestamps: true });

const Listing = mongoose.model("Listing" , productSchema);
module.exports = Listing;