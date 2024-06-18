const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Obtener todos los cursos
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un curso
router.post('/', async (req, res) => {
  const course = new Course({
    title: req.body.title,
    description: req.body.description,
    instructor: req.body.instructor
  });

  try {
    const newCourse = await course.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
