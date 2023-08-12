/**
 * @name Main: Server
 * @author jhonarias1322@gmail.com
 * @description
 * Here is the initialization of the server.
 */

import chalk from 'chalk';
import cluster from 'cluster';
import Http from 'http';
import os from 'os';
import app from './app.js';
import config from './config/index.js';
import db from './db.js';

import { CreateCities, CreateCountries } from './initialConfig/cityMigration.js';

/**
 * Create http server.
 */
const http = Http.createServer(app);

let workers = process.env.WORKERS || os.cpus().length;

if (cluster.isPrimary) {
  console.clear();
  console.log('%s Environment %s', chalk.green('✔︎'), chalk.hex('#1aff1a').bold(config.NODE_ENV));
  console.log('%s start cluster with %s workers', chalk.green('✔︎'), workers);

  workers = 1;

  for (let i = 0; i < workers; i += 1) {
    const worker = cluster.fork().process;
    console.log('%s Worker %s started', chalk.green('✔︎'), chalk.yellow(worker.pid));
  }

  cluster.on('exit', (worker) => {
    console.log('%s Worker %s died. restart...', chalk.red('✘'), chalk.red(worker.process.pid));
    // server_restart = true;
    cluster.fork();
  });
} else {
  db.init()
    .then(async () => {
      /* startAll(); */
      await CreateCountries();
      await CreateCities();

      http.listen(app.get('port'), () => {
        console.log(
          '%s App is running at http://%s:%d in %s mode',
          chalk.green('✔︎'),
          app.get('host'),
          app.get('port'),
          app.get('env'),
        );
        console.log('  Press CTRL-C to stop\n');
      });
    })
    .catch((error) => {
      console.log("%s We're having a really bad day...", chalk.red('✘'));
      console.log(error);
    });
}

process.on('uncaughtException', (err) => {
  console.log(`%s uncaughtException${new Date().toUTCString()}`, chalk.red('✘'));
  console.error(err.message);
  console.error(err.stack);
  process.exit(1);
});
