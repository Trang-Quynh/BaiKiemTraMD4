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



    addProduct  = async (req: Request, res: Response) => {
      let productData = req.body;
      console.log(productData)
      const productNew = await this.productService.add(productData);
      res.status(200).json(productNew)
    }

    deleteProductPost  = async (req: Request, res: Response) => {
        let id = req.params.id
        await this.productService.deleteProduct(id);
        res.status(200).json({message: 'delete success'})
    }





    updateProduct = async (req: Request, res: Response) => {
        let id = req.params.id
        let updateProduct = req.body
        await this.productService.updateProductById(id, updateProduct)
        res.status(200).json('Update success')
    }


    showDetailProduct = async (req: Request, res: Response) => {
        let id = req.params.id
        let product = await this.productService.findProductById(id);
        console.log(product)
        res.status(200).json(product)
    }


    showAccordingBrand = async (req: Request, res: Response) => {
        let idBrand = req.params.id;
        let products = await this.categoryService.getProductsByBrand(idBrand)
        console.log(products)
        res.status(200).json(products)
    }


    sortByPrice = async (req: Request, res: Response) => {
            let products = await this.productService.sortByPriceService()
            console.log(products)
            res.status(200).json(products)
    }
// thiết kế đường dẫn thế này có được không








}

export default new ProductController();