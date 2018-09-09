import express from 'express';
import { Queue } from 'kue';

const app = express();
export default app;
let queue: Queue;
export const initialize = (pQueue: Queue) => {
  queue = pQueue;
};
app.get('/', (_, res, next) => {
  const job = queue
    .create('mytype', {
      letter: 'a',
      title: 'mytitle',
    })
    .removeOnComplete(true)
    .save((error: any) => {
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
