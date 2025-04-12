const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  try {
    const { email, password, birthdate } = req.body;

    // Basic validation
    if (!email || !password || !birthdate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newUser = new User({ email, password, birthdate });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
