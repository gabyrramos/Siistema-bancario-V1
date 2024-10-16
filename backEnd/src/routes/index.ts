import express from 'express';
import transactions from './transactionRoutes';
import usersRouter from './userRouters';
import accountRouter from './accountRoutes';

const router = express.Router();

router.use('/transactions', transactions);
router.use('/account', accountRouter)
router.use('/users',usersRouter);

export default router;

