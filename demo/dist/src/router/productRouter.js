"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
const productRouter = (0, express_1.Router)();
productRouter.get('/', productController_1.default.findAll);
productRouter.get('/sort', productController_1.default.sortByPrice);
productRouter.get('/brand/:id', productController_1.default.showAccordingBrand);
productRouter.get('/product/:id', productController_1.default.showDetailProduct);
productRouter.delete('/:id', productController_1.default.deleteProductPost);
productRouter.put('/:id', productController_1.default.updateProduct);
productRouter.post('/', productController_1.default.addProduct);
exports.default = productRouter;
//# sourceMappingURL=productRouter.js.map