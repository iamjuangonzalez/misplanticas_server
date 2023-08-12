export default {
  /**
   * @param {Function} res
   * @param {String} code
   * @param {String} message
   * @param {Any} data
   */
  response: (res, code, message, data) => {
    code = code ? parseInt(code, 10) : 200;
    if (code === 200) {
      res.status(code).json({ message, data });
    } else if (code === 500) {
      res.status(code).json({ message, data });
    } else {
      res.status(code).json({ message, data });
    }
  },

  /**
   * @param {Function} res
   * @param {String} err
   * @param {String} message
   * @param {Any} data
   */

  success: (res, code, message, data) => {
    res.status(code).json({ message, data });
  },

  /**
   * @param {Function} res
   * @param {Number} status
   * @param {String} message
   * @param {String} error code
   */
  error: (res, status, message, err) => {
    res.status(status).json({ message, code: err });
  },

  authResponse: (res, err, message) => {
    err ? res.status(401).json({ message }) : res.status(200).json({ message });
  },
};
