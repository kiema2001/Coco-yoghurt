import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from './config.js';

import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import feedbackRoutes from './routes/feedback.js';

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: config.corsOrigin, credentials: true }));

app.get('/', (_req, res) => res.send('Coconut Yoghurt API running'));
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/feedback', feedbackRoutes);

mongoose
  .connect(config.mongoUri)
  .then(() => {
    app.listen(config.port, () => {
      console.log(`API on http://localhost:${config.port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error', err);
    process.exit(1);
  });

