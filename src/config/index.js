import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(path.dirname(`${process.env.NODE_ENV}.env`)),
});

const localHostApp = '127.0.0.1';
const localHostApi = '127.0.0.1';

const localPortApp = 5500;
const localPortApi = 3000;

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || localPortApi,
  MONGO_URL:
    process.env.MONGO_URL
    || 'mongodb+srv://admin:eWnKqlVTzutppbHn@softgb.padbzpr.mongodb.net/church',
  MONGO_USER: process.env.MONGO_USER || null,
  MONGO_PASS: process.env.MONGO_PASS || null,
  HOST: process.env.HOST || localHostApi,
  BASE_URL_API: process.env.BASE_URL || `http://${localHostApi}:${localPortApi}/api/`,
  BASE_URL_APP: process.env.BASE_URL_APP || `http://${localHostApp}:${localPortApp}/`,
  JWT_SECRET: process.env.JWT_SECRET || 'assfjbjhbJHVKASKUHUSF6SD95H351FGN31FG35',
};
