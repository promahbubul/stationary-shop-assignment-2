import { Router } from 'express';
import { orderController } from './order.controller';

// Order Router Initialized
const orderRouter = Router();

// Order Routes
orderRouter.post('/', orderController.createAnOrder);
orderRouter.get('/revenue', orderController.revenueOrders);

export default orderRouter;
