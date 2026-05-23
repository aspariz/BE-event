import { Router } from 'express';
import { login, register } from '../controllers/authController';
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from '../controllers/categoryController';
import { getAllPembicara, getPembicaraById, createPembicara, updatePembicara, deletePembicara } from '../controllers/pembicaraController';
import { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent } from '../controllers/eventController';
import { authMiddleware } from '../middleware/auth';

const router = Router();


// Auth
router.post('/auth/login', login);
router.post('/auth/register', register);

// Categories (protected)
router.get('/categories', authMiddleware as any, getAllCategories as any);
router.get('/categories/:id', authMiddleware as any, getCategoryById as any);
router.post('/categories', authMiddleware as any, createCategory as any);
router.put('/categories/:id', authMiddleware as any, updateCategory as any);
router.delete('/categories/:id', authMiddleware as any, deleteCategory as any);

// Pembicara (protected)
router.get('/pembicara', authMiddleware as any, getAllPembicara as any);
router.get('/pembicara/:id', authMiddleware as any, getPembicaraById as any);
router.post('/pembicara', authMiddleware as any, createPembicara as any);
router.put('/pembicara/:id', authMiddleware as any, updatePembicara as any);
router.delete('/pembicara/:id', authMiddleware as any, deletePembicara as any);

// Events (protected)
router.get('/events', authMiddleware as any, getAllEvents as any);
router.get('/events/:id', authMiddleware as any, getEventById as any);
router.post('/events', authMiddleware as any, createEvent as any);
router.put('/events/:id', authMiddleware as any, updateEvent as any);
router.delete('/events/:id', authMiddleware as any, deleteEvent as any);

export default router;
