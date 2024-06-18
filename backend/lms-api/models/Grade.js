const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assessment: { type: mongoose.Schema.Types.ObjectId, ref: 'Assessment' },
  grade: Number
});

module.exports = mongoose.model('Grade', GradeSchema);
