import { Router } from 'express';
import Post from '../models/Post.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// Public: list published posts
router.get('/', async (_req, res) => {
  const posts = await Post.find({ status: 'published' }).sort({ createdAt: -1 });
  res.json(posts);
});

// Staff: create/update/delete
router.post('/', requireAuth, async (req, res) => {
  const { title, content, status } = req.body;
  const post = await Post.create({ title, content, status, author: req.user._id });
  res.json(post);
});

router.put('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const { title, content, status } = req.body;
  const post = await Post.findByIdAndUpdate(id, { title, content, status }, { new: true });
  res.json(post);
});

router.delete('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  res.json({ ok: true });
});

export default router;

