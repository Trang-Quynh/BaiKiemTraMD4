import {Request, Response} from "express";
import productService from "../service/productService";
import categoryService from "../service/CategoryService";

class ProductController {
    private productService;
    private categoryService;

    constructor() {
        this.productService = productService;
        this.categoryService = categoryService;
    }

    findAll = async (req: Request, res: Response) => {
            let listProduct = await this.productService.getAll();
            res.status(200).json(listProduct)
    }

    // addProduct = async (req: Request, res: Response) => {
    //     if(!req.body.name){
    //         res.status(400).json({
    //             message: 'name missing'
    //         })
    //     }else{
    //         await this.productService.add(req.body);
    //         res.status(201).json({message:'OK'})
    //     }
    // }

    addProduct  = async (req: Request, res: Response) => {
      let productData = req.body;
      const productNew = await this.productService.add(productData);
      res.status(200).json(productNew)
    }

    deleteProductPost  = async (req: Request, res: Response) => {
        let id = req.params.id
        console.log(id)
        await this.productService.deleteProduct(id);
        res.status(200).json({message: 'delete success'})
    }

    showFormAdd = async (req: Request, res: Response) => {
        let categoryList = await this.categoryService.getAll();
        console.log(categoryList)
        res.status(200).json(categoryList)
    }
    showFormUpdate = async (req: Request, res: Response) => {
        let id = req.params.id
        let product = await this.productService.findProductById(id);
        let categoryList = await this.categoryService.getAll();
        res.status(200).json({product: product, category: categoryList})
    }


    updateProduct = async (req: Request, res: Response) => {
        let id = req.params.id
        let updateProduct = req.body
        await this.productService.updateProductById(id, updateProduct)
        res.status(200).json({message: 'update success'})
    }
    find = async (req: Request, res: Response) => {
        let keyword = req.query.search
        console.log(keyword)
        let products = await this.productService.findProductByKeyword(keyword)
        console.log(products)
        res.status(200).json(products)
    }




}

export default new ProductController();