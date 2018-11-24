const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pairSchema = new Schema({
  g1: {
    type: String,
    required: true,
  },
  g1x1: {
    type: Number,
    required: true,
  },
  g1x2: {
    type: Number,
    required: true,
  },
  g2: {
    type: String,
    required: true,
  },
  g2x1: {
    type: Number,
    required: true,
  },
  g2x2: {
    type: Number,
    required: true,
  }
});

const Pair = mongoose.model("Pair", pairSchema);

module.exports = Pair;