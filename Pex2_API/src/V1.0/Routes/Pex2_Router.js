const express = require('express');

const {
    getAllCases,
    createCase,
    updateCase,
    deleteCase
} = require('../Controllers/Pex2_controllers');

const router = express.Router();

// GET | localhost:3002/api/v1/cases
router.get('/', getAllCases);

// POST | localhost:3002/api/v1/cases
router.post('/', createCase);

// PUT | localhost:3002/api/v1/cases/1
router.put('/:id', updateCase);

// DELETE | localhost:3002/api/v1/cases/1
router.delete('/:id', deleteCase);

module.exports = router;
