const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  initiator:        { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  responder:        { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  initial_item:     { type: mongoose.Schema.Types.ObjectId, ref: "ClothesItem" },
  response_item:    { type: mongoose.Schema.Types.ObjectId, ref: "ClothesItem" },
  status:           { type: Number, enum: [1,2,3,4], required: true, default: 1 }
}, {
  timestamps: true
});

module.exports = mongoose.model("Transaction", transactionSchema);
