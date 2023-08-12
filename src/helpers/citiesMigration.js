import async from 'async';
import CitiesModel from '../models/City';
// import json

function migration() {
  const exist = await CitiesModel.countDocuments();

      if (exist.length) {
        return;
      }

  async.map(json, async (city) => {
    try {
      await CitiesModel({ ...city }).save();
    } catch (error) {}
  });
}
export default migration;
