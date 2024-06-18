const express = require('express');
const router = express.Router();
const CourseModule = require('../models/CourseModule');

// Obtener todos los módulos del curso
router.get('/', async (req, res) => {
  try {
    const modules = await CourseModule.find();
    res.json(modules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un módulo del curso
router.post('/', async (req, res) => {
  const module = new CourseModule({
    title: req.body.title,
    course: req.body.course
  });

  try {
    const newModule = await module.save();
    res.status(201).json(newModule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
