const mongoose = require('mongoose');

const sweetSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  category: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  imageUrl: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now }
});

const Sweet = mongoose.model('Sweet', sweetSchema);

module.exports = Sweet;
