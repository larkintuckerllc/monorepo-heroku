"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
exports.default = app;
let queue;
exports.initialize = (pQueue) => {
    queue = pQueue;
};
app.get('/', (_, res, next) => {
    const job = queue
        .create('mytype', {
        letter: 'a',
        title: 'mytitle',
    })
        .removeOnComplete(true)
        .save((error) => {
        if (error) {
            next(error);
            return;
        }
        job.on('complete', (result) => {
            res.send(`Hello Intense ${result}`);
        });
        job.on('failed', () => {
            const failedError = new Error('failed');
            next(failedError);
        });
    });
});
//# sourceMappingURL=app.js.map