const mongoose = require('mongoose');

const DiscussionForumSchema = new mongoose.Schema({
  title: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
});

module.exports = mongoose.model('DiscussionForum', DiscussionForumSchema);
