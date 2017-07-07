let STATUS = require('./status');

function hook(req, res, next) {
  res.sendHttpStatus = function sendJsonStatus(code, err = null) {
    // Get status code declaration
    const status = STATUS[code];

    // If not found, throw error and halt
    if (!status) throw new Error(`Status code ${code} has not been defined.`);

    // If found send response
    return res.status(code).json(Object.assign({}, { msg: status.msg }, { err }));
  };
  next();
}
module.exports = function main({ customStatusCodes }) {
  // If custom status code are being supplied, use these custom status codes
  if (customStatusCodes) STATUS = customStatusCodes;

  // Hook the method as Express Middleware
  return hook;
};

