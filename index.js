let STATUS = require('./status');

function hook(req, res, next) {
  res.sendHttp = function sendHttp(code, err = null) {
    // Get status code declaration
    const status = STATUS[code];

    // If not found, throw error and halt
    if (!status) throw new Error(`Status code ${code} has not been defined.`);

    // If found, send response
    return res.status(code).json(Object.assign({}, { msg: status.msg }, { err }));
  };
  next();
}
module.exports = function main() {
  // Hook the method as Express Middleware
  return hook;
};

