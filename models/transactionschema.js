const mongoose = require("mongoose");


const transactionSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['Stock In', 'Stock Out'], required: true },
    quantity: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Transaction', transactionSchema);
  