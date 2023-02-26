const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  displayAttributes: {
    name: { type: String, required: true },
    description: { type: String },
    sortOrder: { type: Number },
    backgroundImage: { type: String },
  },
  content: [{
    itemId: { type: String, required: true },
    quantity: { type: Number, required: true },
  }],
  scheduling: {
    daysOfWeek: [{ type: Number, min: 1, max: 7 }],
    datesOfMonth: [{ type: Number, min: 1, max: 31 }],
    monthsOfYear: [{ type: Number, min: 1, max: 12 }],
  },
  targeting: { type: String },
  pricingOptions: [{
    currency: { type: String, required: true },
    cost: { type: Number, required: true },
  }],
});

const offerModel = mongoose.model('Offer', offerSchema);

module.exports = offerModel;
