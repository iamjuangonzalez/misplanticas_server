/**
 * @module app
 * @author jhonarias1322@gmail.com
 * @description
 * Here the routes are loaded.
 */

import express from 'express';

import fs from 'fs';

import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const foldername = fileURLToPath(import.meta.url);
const pathRouter = path.dirname(foldername);

const removeExtension = (fileName) => fileName.split('.').shift();

fs.readdirSync(pathRouter).filter(async (file) => {
  const fileWithOutExtension = removeExtension(file);
  if (!['index'].includes(fileWithOutExtension)) {
    const ruta = await import(`./${fileWithOutExtension}.routes.js`);
    router.use(`/${fileWithOutExtension}`, ruta.default);
    console.log(
      chalk.greenBright('✔︎'),
      'Ruta cargada ==> ',
      chalk.greenBright.bold(fileWithOutExtension),
    );
  }
});

export default router;
