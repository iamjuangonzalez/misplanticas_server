import defaultCtr from '../helpers/default.js';

async function testController(req, res) {
  defaultCtr.response(res, null, 'funciona la api', { msg: 'hola' });
}

export default testController;
