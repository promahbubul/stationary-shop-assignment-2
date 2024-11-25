import { TOrder } from './order.interface';
import Order from './order.model';

const createOrder = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
};

const revenueOrders = async () => {
  const totalRevenue = await Order.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
    { $project: { totalRevenue: 1, _id: 0 } },
  ]);
  return totalRevenue;
};

export const orderService = {
  createOrder,
  revenueOrders,
};
