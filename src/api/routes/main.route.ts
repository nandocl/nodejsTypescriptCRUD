import { Router } from 'express';

// Consts
const router = Router();

// Import controllers
import { UserController } from '../controllers/user.controller';

router.route('/')
.get(UserController.get)
.post(UserController.post)
.put(UserController.put)
.delete(UserController.delete);

export default router;