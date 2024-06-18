const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  module: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseModule' }
});

module.exports = mongoose.model('Lesson', LessonSchema);
