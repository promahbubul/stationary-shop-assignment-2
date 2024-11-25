import express, { Request, Response } from 'express';
import cors from 'cors';
import productRouter from './app/modules/product/product.router';
import orderRouter from './app/modules/order/order.router';

// Express Initialize
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Stationary Shop Server working. ._.',
  });
});

export default app;
