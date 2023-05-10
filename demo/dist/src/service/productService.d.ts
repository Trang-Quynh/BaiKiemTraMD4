declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<any>;
    deleteProduct: (id: any) => Promise<void>;
    sortByPriceService: () => Promise<any>;
    findProductById: (id: any) => Promise<any>;
    updateProductById: (id: any, updateProduct: any) => Promise<any>;
    findProductByKeyword: (keyword: any) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
