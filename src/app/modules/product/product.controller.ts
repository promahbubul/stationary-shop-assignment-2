import { Request, Response } from 'express';
import { productService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productService.createProduct(product);
    res.json({
      message: 'Product created successfully',
      success: true,
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

const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getProducts();
    res.json({
      message: 'Products retrieved successfully',
      success: true,
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

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productService.getSingleProduct(productId);
    res.json({
      message: 'Product retrieved successfully',
      success: true,
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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const productData = req.body;
    const result = await productService.updateProduct(productId, productData);
    res.json({
      message: 'Product updated successfully',
      success: true,
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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await productService.deleteProduct(productId);
    res.json({
      message: 'Product deleted successfully',
      success: true,
      data: {},
    });
  } catch (error) {
    res.json({
      message: 'Something went wrong',
      success: false,
      data: error,
    });
  }
};

export const productController = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
