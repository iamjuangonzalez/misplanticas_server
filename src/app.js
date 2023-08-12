/**
 * @module app
 * @author jhonarias1322@gmail.com
 * @description
 * Here is the main logic.
 */

import bodyParser from 'body-parser';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { __express as pugExpress } from 'pug';
import { fileURLToPath } from 'url';
import config from './config/index.js';
import apiRoutes from './routes/index.js';

/**
 * Public (route handlers).
 */
import homeController from './controllers/views/home.controller.js';

const app = express();

/**
 * Express configuration.
 */
app.set('host', config.HOST);
app.set('port', config.PORT);
app.engine('pug', pugExpress);

const filePath = fileURLToPath(import.meta.url);
const currentPath = path.dirname(filePath);
// __dirname en commonjs

app.set('views', path.join(currentPath, '../views'));
app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(express.static(path.join(currentPath, '../public')));
app.get('/', homeController.index);

/**
 * API routes.
 */
app.use('/api', cookieParser(), apiRoutes);

export default app;
