import { Router } from 'express';
import page from './controllers/page';
import upload from './controllers/upload';

const router = Router();

router.get('/', page.splash);
router.get('/home', page.home);

router.post('/api/upload', upload.upload);

export default router;
