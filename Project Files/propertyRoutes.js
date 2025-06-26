const express = require('express');
const router = express.Router();
const { createProperty, getAllProperties, getPropertyById } = require('../controllers/propertyController');

router.post('/', createProperty);
router.get('/', getAllProperties);
router.get('/:id', getPropertyById);

module.exports = router;
