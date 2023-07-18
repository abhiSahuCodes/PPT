import express from 'express';
import { register, login, logout } from '../controllers/authController.js';


const router = express.Router();

// POST /user/register
router.post('/register', register);

// POST /user/login
router.post('/login', login);

// POST /user/logout
router.post('/logout', logout);

export default router;
