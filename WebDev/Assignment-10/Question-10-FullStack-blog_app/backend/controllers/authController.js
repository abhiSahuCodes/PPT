import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import BlacklistedToken from '../models/BlackListedToken.js';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Checking if a user with the provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hashing the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 12);

    // Creating a new user document using the "User" model
    const newUser = new User({ name, email, password: hashedPassword });

    // Saving the user document to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Checking if a user with the provided email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Comparing the provided password with the hashed password in the database
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Creating a JSON Web Token (JWT) to include in the response
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const logout = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Authorization token not found' });
    }

    // Checking if the token is already blacklisted
    const isTokenBlacklisted = await BlacklistedToken.findOne({ token });
    if (isTokenBlacklisted) {
      return res.status(401).json({ message: 'Token has already been invalidated' });
    }

    // Adding the token to the blacklist to invalidate it
    const blacklistedToken = new BlacklistedToken({ token });
    await blacklistedToken.save();

    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};