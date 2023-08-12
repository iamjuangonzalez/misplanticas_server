import cron from 'node-cron';

// import { isConnected } from '../db.js';

// Schedule tasks to be run on the server.
// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )

const updateShippings = cron.schedule(
  '*/45 * * * *',
  () => {
    console.log('⏱️ CronJob Time: Update shippings', new Date());
  },
  {
    scheduled: false,
  },
);

export default {
  startAll: () => {
    /* updateShippings.start(); */
  },
};
