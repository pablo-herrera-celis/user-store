import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { ProductController } from './controlles';
import { ProductService } from '../services';

export class ProductRoutes {
  static get routes(): Router {
    const router = Router();
    // const categoryService = new CategoryService();
    const productService = new ProductService();
    const controller = new ProductController(productService);

    // Definir las rutas
    router.get('/', controller.getProducts);
    router.post('/', [AuthMiddleware.validateJWT], controller.createProduct);

    return router;
  }
}
