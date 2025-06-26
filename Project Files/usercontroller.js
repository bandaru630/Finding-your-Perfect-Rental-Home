const User = require('../models/User');
│   │   │   
│   │   │   exports.registerUser = async (req, res) => {
│   │   │     try {
│   │   │       const user = new User(req.body);
│   │   │       await user.save();
│   │   │       res.status(201).json(user);
│   │   │     } catch (error) {
│   │   │       res.status(500).json({ error: 'Registration failed' });
│   │   │     }
│   │   │   };
│   │   │   
│   │   │   exports.loginUser = async (req, res) => {
│   │   │     try {
│   │   │       const { email, password } = req.body;
│   │   │       const user = await User.findOne({ email, password });
│   │   │       if (!user) return res.status(401).json({ error: 'Invalid credentials' });
│   │   │       res.status(200).json(user);
│   │   │     } catch (error) {
│   │   │       res.status(500).json({ error: 'Login failed' });
│   │   │     }
│   │   │   };