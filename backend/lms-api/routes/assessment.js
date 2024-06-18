const express = require('express');
const router = express.Router();
const Assessment = require('../models/Assessment');

// Obtener todas las evaluaciones
router.get('/', async (req, res) => {
  try {
    const assessments = await Assessment.find();
    res.json(assessments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear una evaluación
router.post('/', async (req, res) => {
  const assessment = new Assessment({
    title: req.body.title,
    course: req.body.course
  });

  try {
    const newAssessment = await assessment.save();
    res.status(201).json(newAssessment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
