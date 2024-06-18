const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema({
  title: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
});

module.exports = mongoose.model('Assessment', AssessmentSchema);
