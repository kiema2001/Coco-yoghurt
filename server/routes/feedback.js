import { Router } from 'express';
import Feedback from '../models/Feedback.js';

const router = Router();

// Public: submit feedback/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message required' });
  const fb = await Feedback.create({ name, email, message });
  res.json(fb);
});

// Admin: list feedback (you can later add admin-only middleware)
router.get('/', async (_req, res) => {
  const list = await Feedback.find().sort({ createdAt: -1 });
  res.json(list);
});

export default router;

