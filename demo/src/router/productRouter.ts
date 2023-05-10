import {Router} from "express";
import productController from "../controller/productController";

const productRouter = Router();
productRouter.get('/', productController.findAll);
productRouter.get('/sort', productController.sortByPrice);
productRouter.get('/brand/:id', productController.showAccordingBrand);
productRouter.get('/product/:id', productController.showDetailProduct);
productRouter.delete('/:id', productController.deleteProductPost);
productRouter.put('/:id', productController.updateProduct);
productRouter.post('/', productController.addProduct);

export default productRouter;