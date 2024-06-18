const express = require('express');
const router = express.Router();
const Grade = require('../models/Grade');

// Obtener todas las calificaciones
router.get('/', async (req, res) => {
  try {
    const grades = await Grade.find();
    res.json(grades);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear una calificación
router.post('/', async (req, res) => {
  const grade = new Grade({
    student: req.body.student,
    assessment: req.body.assessment,
    grade: req.body.grade
  });

  try {
    const newGrade = await grade.save();
    res.status(201).json(newGrade);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
