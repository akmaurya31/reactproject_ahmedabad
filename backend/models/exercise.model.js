const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  project_name: { type: String, required: true },
  candidate: { type: String, required: true },
  username: { type: String, required: false },
  description: { type: String, required: false },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
  price:{ type: Number, required: false },   
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;