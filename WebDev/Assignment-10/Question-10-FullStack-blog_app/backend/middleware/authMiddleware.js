import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; 

    if (!token) {
      return res.status(401).json({ message: 'Authorization token not found' });
    }

    // Verifying the token and extract the user ID
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decodedToken.userId;

    // Finding the user associated with the token
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Setting the authenticated user in the request object
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};
