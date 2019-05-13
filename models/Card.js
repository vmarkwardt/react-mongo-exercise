const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    get: (value) => value.toUpperCase(),
  },
  description: {
    type: String,
  },
  tags: {
    type: [String],
  },
  isBookmarked: {
    type: Boolean,
    default: false,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Card', cardSchema);

//description and tags (an Array of Strings)
