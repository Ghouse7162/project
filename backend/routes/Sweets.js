const express = require('express');
const router = express.Router();
const sweetController = require('../controllers/sweetController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

// ------------------- PUBLIC ROUTES -------------------

// Get all sweets (anyone can view)
router.get('/', sweetController.getAllSweets);

// Search sweets by name or query (optional: make auth-protected if needed)
router.get('/search', sweetController.searchSweets);

// ------------------- PROTECTED USER ROUTES -------------------

// Purchase a sweet (requires login)
router.post('/:id/purchase', authMiddleware, sweetController.purchaseSweet);

// ------------------- ADMIN-ONLY ROUTES -------------------

// Add a new sweet
router.post('/', authMiddleware, adminMiddleware, sweetController.addSweet);

// Update an existing sweet
router.put('/:id', authMiddleware, adminMiddleware, sweetController.updateSweet);

// Delete a sweet
router.delete('/:id', authMiddleware, adminMiddleware, sweetController.deleteSweet);

// Restock a sweet
router.post('/:id/restock', authMiddleware, adminMiddleware, sweetController.restockSweet);

module.exports = router;
