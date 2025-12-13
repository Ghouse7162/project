const Sweet = require('../models/Sweet');

// Get all sweets (public)
exports.getAllSweets = async (req, res) => {
  try {
    const sweets = await Sweet.find();
    res.json(sweets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Search sweets by name or category (public)
exports.searchSweets = async (req, res) => {
  try {
    const { query } = req.query;
    const sweets = await Sweet.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } },
      ],
    });
    res.json(sweets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create new sweet (admin only)
exports.addSweet = async (req, res) => {
  const { name, price, category, description, imageUrl } = req.body;
  try {
    const sweet = new Sweet({ name, price, category, description, imageUrl });
    await sweet.save();
    res.status(201).json(sweet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update sweet (admin only)
exports.updateSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });
    res.json(sweet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete sweet (admin only)
exports.deleteSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findByIdAndDelete(req.params.id);
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });
    res.json({ message: 'Sweet deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Purchase a sweet (requires login)
exports.purchaseSweet = async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });

    // Example purchase logic: remove 1 unit (if you have quantity field)
    if (sweet.quantity !== undefined) {
      if (sweet.quantity <= 0) return res.status(400).json({ message: 'Out of stock' });
      sweet.quantity -= 1;
      await sweet.save();
    }

    res.json({ message: `Purchased ${sweet.name} successfully` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Restock sweet (admin only)
exports.restockSweet = async (req, res) => {
  try {
    const { amount } = req.body; // number of items to restock
    const sweet = await Sweet.findById(req.params.id);
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });

    if (sweet.quantity === undefined) sweet.quantity = 0;
    sweet.quantity += Number(amount);
    await sweet.save();

    res.json({ message: `${sweet.name} restocked successfully`, quantity: sweet.quantity });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
