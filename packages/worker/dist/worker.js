"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kue_1 = __importDefault(require("kue"));
const { REDIS_URL } = process.env;
try {
    const queue = kue_1.default.createQueue({
        redis: REDIS_URL,
    });
    queue.process('mytype', (job, done) => {
        switch (job.data.letter) {
            case 'a':
                done(null, 'apple');
                break;
            default:
                done(null, 'unknown');
        }
    });
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=worker.js.map