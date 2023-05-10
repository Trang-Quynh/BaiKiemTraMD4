import {Router} from "express";
import productRouter from "./productRouter";


const router = Router();
router.use('/products', productRouter);
// router.use('/users', userRouter);

export default router;