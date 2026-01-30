const mongoose = require("mongoose");

const fraudLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false
    },

    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: false
    },

    phone: {
      type: String
    },

    email: {
      type: String
    },

    amount: {
    type: Number,
     required: true
   },


    reasons: {
      type: [String],
      required: true
    },

    fraudScore: {
      type: Number,
      required: true
    },

    riskLevel: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      required: true
    },

    status: {
      type: String,
      enum: ["BLOCKED", "APPROVED"],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("FraudLog", fraudLogSchema);
