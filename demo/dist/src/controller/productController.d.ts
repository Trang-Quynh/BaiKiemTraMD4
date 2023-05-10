import { Request, Response } from "express";
declare class ProductController {
    private productService;
    private categoryService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    addProduct: (req: Request, res: Response) => Promise<void>;
    deleteProductPost: (req: Request, res: Response) => Promise<void>;
    updateProduct: (req: Request, res: Response) => Promise<void>;
    showDetailProduct: (req: Request, res: Response) => Promise<void>;
    showAccordingBrand: (req: Request, res: Response) => Promise<void>;
    sortByPrice: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
