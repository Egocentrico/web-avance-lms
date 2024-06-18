const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Obtener todos los mensajes
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un mensaje
router.post('/', async (req, res) => {
  const message = new Message({
    content: req.body.content,
    author: req.body.author,
    forum: req.body.forum
  });

  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
