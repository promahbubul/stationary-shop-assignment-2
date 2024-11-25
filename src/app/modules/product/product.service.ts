import { TProduct } from './product.interface';
import Product from './product.model';

const createProduct = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getProducts = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProduct = async (id: string, productData: TProduct) => {
  const result = await Product.findByIdAndUpdate(id, productData, {
    new: true,
  });
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productService = {
  getProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
