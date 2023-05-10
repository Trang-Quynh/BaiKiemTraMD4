"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let listProduct = await this.productService.getAll();
            res.status(200).json(listProduct);
        };
        this.addProduct = async (req, res) => {
            let productData = req.body;
            console.log(productData);
            const productNew = await this.productService.add(productData);
            res.status(200).json(productNew);
        };
        this.deleteProductPost = async (req, res) => {
            let id = req.params.id;
            await this.productService.deleteProduct(id);
            res.status(200).json({ message: 'delete success' });
        };
        this.updateProduct = async (req, res) => {
            let id = req.params.id;
            let updateProduct = req.body;
            await this.productService.updateProductById(id, updateProduct);
            res.status(200).json('Update success');
        };
        this.showDetailProduct = async (req, res) => {
            let id = req.params.id;
            let product = await this.productService.findProductById(id);
            console.log(product);
            res.status(200).json(product);
        };
        this.showAccordingBrand = async (req, res) => {
            let idBrand = req.params.id;
            let products = await this.categoryService.getProductsByBrand(idBrand);
            console.log(products);
            res.status(200).json(products);
        };
        this.sortByPrice = async (req, res) => {
            let products = await this.productService.sortByPriceService();
            console.log(products);
            res.status(200).json(products);
        };
        this.productService = productService_1.default;
        this.categoryService = CategoryService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map