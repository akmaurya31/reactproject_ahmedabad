const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const candidateSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  jobs: { type: String, required: true },
  updatedby: { type: String, required: false },
  others: { type: Object, required: false },
}, {
  timestamps: true,
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;