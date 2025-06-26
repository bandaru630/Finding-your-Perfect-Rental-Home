const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  propType: { type: String, required: true },
  propAdType: { type: String, enum: ['Rent', 'Sale'], required: true },
  isAvailable: { type: Boolean, default: true },
  propAddress: { type: String, required: true },
  ownerContact: { type: String, required: true },
  propAmt: { type: Number, required: true },
  propImages: [{ type: String }],
  adInfo: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Property', propertySchema);
