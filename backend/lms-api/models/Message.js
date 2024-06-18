const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  forum: { type: mongoose.Schema.Types.ObjectId, ref: 'DiscussionForum' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);
