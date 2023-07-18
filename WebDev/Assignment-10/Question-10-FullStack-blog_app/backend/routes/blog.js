import express from 'express';
import { addBlog, getAllBlogs, deleteBlog, updateBlog, getBlogByID, getBlogsOfUser } from '../controllers/blogController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /blog/add
router.post('/add', authMiddleware, addBlog);

// GET /blog/
router.get('/', getAllBlogs);

// DELETE /blog/:id
router.delete('/:id', authMiddleware, deleteBlog);

// PATCH /blog/:id
router.patch('/:id', authMiddleware, updateBlog);

// GET /blog/:blogID
router.get('/:blogID', getBlogByID);

// GET /myblog/:authorID
router.get('/myblog/:authorID', authMiddleware, getBlogsOfUser);

export default router;
