import { Request, Response } from 'express';
import Product from '../product/product.model';
import { orderService } from './order.service';
import { TProduct } from '../product/product.interface';

const createAnOrder = async (req: Request, res: Response) => {
  try {
    const { email, product, quantity } = req.body;
    const productData = await Product.findById(product);

    if (!productData) {
      res.json({ message: 'Product not found', success: false });
    } else if ((productData as TProduct).quantity < quantity) {
      res.json({ message: 'Insufficient stock', success: false });
    } else {
      (productData as TProduct).quantity -= quantity;

      if ((productData as TProduct).quantity === 0)
        (productData as TProduct).inStock = false;

      const totalPrice = (productData as TProduct).price * quantity;
      const order = { email, product, quantity, totalPrice };
      const result = await orderService.createOrder(order);
      res.json({
        message: 'Order created successfully',
        status: true,
        data: result,
      });
    }
  } catch (error) {
    res.json({
      message: 'Something went wrong',
      success: false,
      data: error,
    });
  }
};

const revenueOrders = async (req: Request, res: Response) => {
  try {
    const [result] = await orderService.revenueOrders();

    res.json({
      message: 'Revenue calculated successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: 'Something went wrong',
      success: false,
      data: error,
    });
  }
};

export const orderController = {
  createAnOrder,
  revenueOrders,
};
