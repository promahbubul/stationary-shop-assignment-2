import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: [true, 'Please enter product name'] },
    brand: { type: String, required: [true, 'Please enter product brand'] },
    price: {
      type: Number,
      required: [true, 'Please enter product price'],
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      enum: [
        'Writing',
        'Office Supplies',
        'Art Supplies',
        'Educational',
        'Technology',
      ],
      required: true,
      description: {
        type: String,
        required: [true, 'Please write product description'],
      },
    },
    quantity: {
      type: Number,
      required: [true, 'Please enter product quantity'],
      min: [0, 'Quantity must be a positive number'],
    },
    inStock: { type: Boolean, required: [true, 'Please provide stock'] },
  },
  {
    timestamps: true,
  },
);

const Product = model<TProduct>('Product', productSchema);

export default Product;
