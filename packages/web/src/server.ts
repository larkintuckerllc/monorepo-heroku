import kue from 'kue';
import app, { initialize } from './app';

const { REDIS_URL } = process.env;
const PORT = process.env.PORT || '5000';

const start = async () => {
  try {
    const queue = kue.createQueue({
      redis: REDIS_URL,
    });
    initialize(queue);
    app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
  } catch (error) {
    console.log(error);
  }
};
start();
