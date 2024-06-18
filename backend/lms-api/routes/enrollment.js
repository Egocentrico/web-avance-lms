const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

// Obtener todas las inscripciones
router.get('/', async (req, res) => {
  try {
    const enrollments = await Enrollment.find();
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear una inscripción
router.post('/', async (req, res) => {
  const enrollment = new Enrollment({
    student: req.body.student,
    course: req.body.course
  });

  try {
    const newEnrollment = await enrollment.save();
    res.status(201).json(newEnrollment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
