import { Router } from 'express';
import page from './controllers/page';
import upload from './controllers/upload';
import auth from './controllers/auth';

const router = Router();

// router.get('/', page.splash);
router.get('/', page.home);

router.post('/api/upload', upload.upload);
router.post('/api/register', auth.register);
router.post('/api/login', auth.login);

export default router;
