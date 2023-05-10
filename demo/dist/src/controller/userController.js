"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    constructor() {
        this.signup = async (req, res) => {
            let user = req.body;
            let userCheck = await this.userService.checkUser(req.body);
            if (userCheck) {
                res.status(200).json('Đã có tài khoản');
            }
            else if (!user.username || !user.password) {
                res.status(200).json('Dien thieu');
            }
            else {
                user.password = await bcrypt_1.default.hash(user.password, 10);
                let newUser = await this.userService.createNewUser(user);
                res.status(201).json(newUser);
            }
        };
        this.userService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map