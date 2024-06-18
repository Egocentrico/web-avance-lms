const mongoose = require('mongoose');

const CourseModuleSchema = new mongoose.Schema({
  title: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
});

module.exports = mongoose.model('CourseModule', CourseModuleSchema);
