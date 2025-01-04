const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description:{type:String},
    stockLevel: { type: Number, default: 0 },
    reorderPoint: { type: Number, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Tracks who added/edited
  }, { timestamps: true });
  
  module.exports = mongoose.model('Product', productSchema);
  