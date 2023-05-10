import {Category} from "../entity/category";
import {AppDataSource} from "../data-source";

class CategoryService {
    private categoryRepository;
    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category);
    }

    getAll = async () => {
        let categories = await this.categoryRepository.find({
            // relations: {
            //     products: true,
            // },
            // where: {
            //     name: "Keo"
            // }
        })
        return categories;
    }

    getProductsByBrand = async (idBrand) => {
        let categories = await this.categoryRepository.find({
            relations: {
                products: true,
            },
            where: {
                id: idBrand
            }
        })
        return categories;
    }

}

export default new CategoryService();