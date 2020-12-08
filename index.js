const path = require('path');

const getCacheDirs = (constants) => [
  path.join(constants.PUBLISH_DIR, '..', '.config/toast-nodejs',
  path.normalize(`${constants.PUBLISH_DIR}/web_modules`),
];

module.exports = {
  async onPreBuild({ constants, utils }) {
    const cacheDirs = getCacheDirs(constants);

    if (await utils.cache.restore(cacheDirs)) {
      console.log('YEAH TOAST 🍞 (we found a Toast cache)');
    } else {
      console.log('No Toast cache found. Rebuilding from scratch.');
    }
  },
  async onPostBuild({ constants, utils }) {
    const cacheDirs = getCacheDirs(constants);

    if (await utils.cache.save(cacheDirs)) {
      console.log('Toast cache stored');
    } else {
      console.log('Unable to store the Toast cache');
    }
  },
};
