import { Router } from 'express';
import { productController } from './product.controller';

// Product Routes Initialized
const productRouter = Router();

// Product Routes
productRouter.post('/', productController.createProduct);
productRouter.get('/:productId', productController.getSingleProduct);
productRouter.get('/', productController.getProducts);
productRouter.put('/:productId', productController.updateProduct);
productRouter.delete('/:productId', productController.deleteProduct);

export default productRouter;
