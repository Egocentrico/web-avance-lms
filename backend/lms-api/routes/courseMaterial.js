const express = require('express');
const router = express.Router();
const CourseMaterial = require('../models/CourseMaterial');

// Obtener todos los materiales del curso
router.get('/', async (req, res) => {
  try {
    const materials = await CourseMaterial.find();
    res.json(materials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un material del curso
router.post('/', async (req, res) => {
  const material = new CourseMaterial({
    title: req.body.title,
    url: req.body.url,
    course: req.body.course
  });

  try {
    const newMaterial = await material.save();
    res.status(201).json(newMaterial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
