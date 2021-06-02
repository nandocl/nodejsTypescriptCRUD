import { Router } from 'express';
import userRoutes from './user.route'

const router = Router();

router.get('/', (req,res) => res.status(200).send('Funcionando'));
router.use('/users', userRoutes);

export default router;