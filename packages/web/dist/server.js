"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const kue_1 = __importDefault(require("kue"));
const app_1 = __importStar(require("./app"));
const { REDIS_URL } = process.env;
const PORT = process.env.PORT || '5000';
const start = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const queue = kue_1.default.createQueue({
            redis: REDIS_URL,
        });
        app_1.initialize(queue);
        app_1.default.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
//# sourceMappingURL=server.js.map