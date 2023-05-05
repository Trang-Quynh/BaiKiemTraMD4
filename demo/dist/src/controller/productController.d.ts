import { Request, Response } from "express";
declare class ProductController {
    private productService;
    private categoryService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    addProduct: (req: Request, res: Response) => Promise<void>;
    deleteProductPost: (req: Request, res: Response) => Promise<void>;
    showFormAdd: (req: Request, res: Response) => Promise<void>;
    showFormUpdate: (req: Request, res: Response) => Promise<void>;
    updateProduct: (req: Request, res: Response) => Promise<void>;
    find: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
