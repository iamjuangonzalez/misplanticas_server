import mongoose from 'mongoose';

import chalk from 'chalk';
import config from './config/index.js';

let connected = false;

export default {
  init: async () => new Promise((resolve, reject) => {
    mongoose
      .connect(config.MONGO_URL, {
        user: config.MONGO_USER,
        pass: config.MONGO_PASS,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log('%s Data base connected succesfully', chalk.green('✔︎'));
        connected = true;
        resolve();
      })
      .catch((error) => {
        console.log(error);
        connected = false;
        reject(error);
      });
  }),

  isConnected: () => connected,
};
