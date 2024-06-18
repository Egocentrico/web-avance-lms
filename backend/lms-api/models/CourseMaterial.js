const mongoose = require('mongoose');

const CourseMaterialSchema = new mongoose.Schema({
  title: String,
  url: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
});

module.exports = mongoose.model('CourseMaterial', CourseMaterialSchema);

//magia papa