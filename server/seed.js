import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { config } from './config.js';
import User from './models/User.js';

(async () => {
  await mongoose.connect(config.mongoUri);
  const passwordHash = await bcrypt.hash('Admin123!', 10);
  const admin = await User.create({
    name: 'Site Admin',
    email: 'admin@coco.local',
    passwordHash,
    role: 'admin'
  });
  console.log('Created admin:', admin.email);
  await mongoose.disconnect();
})();

