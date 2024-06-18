const express = require('express');
const router = express.Router();
const DiscussionForum = require('../models/DiscussionForum');

// Obtener todos los foros de discusión
router.get('/', async (req, res) => {
  try {
    const forums = await DiscussionForum.find();
    res.json(forums);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un foro de discusión
router.post('/', async (req, res) => {
  const forum = new DiscussionForum({
    title: req.body.title,
    course: req.body.course
  });

  try {
    const newForum = await forum.save();
    res.status(201).json(newForum);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
