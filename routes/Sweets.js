const express = require('express');
const router = express.Router();
const sweetController = require('../controllers/sweetController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware'); // <-- use correct names

// Public routes
router.get('/', sweetController.getAllSweets);
router.get('/search', sweetController.searchSweets);

// Protected route (requires login)
router.post('/:id/purchase', authMiddleware, sweetController.purchaseSweet);

// Admin-only routes
router.post('/', authMiddleware, adminMiddleware, sweetController.addSweet);
router.put('/:id', authMiddleware, adminMiddleware, sweetController.updateSweet);
router.delete('/:id', authMiddleware, adminMiddleware, sweetController.deleteSweet);
router.post('/:id/restock', authMiddleware, adminMiddleware, sweetController.restockSweet);

module.exports = router;
