import {Router} from "express";
import productController from "../controller/productController";
import {auth} from "../middleware/auth";
import {decentralization} from "../middleware/decentralization";

const productRouter = Router();
productRouter.get('/', productController.findAll);
productRouter.get('/search', productController.find);

productRouter.use(auth)
// day la ham by
productRouter.use(decentralization)
productRouter.delete('/:id', productController.deleteProductPost);
productRouter.get('/:id', productController.showFormUpdate);
productRouter.put('/:id', productController.updateProduct);
productRouter.get('/add', productController.showFormAdd);
productRouter.post('/add', productController.addProduct);

export default productRouter;