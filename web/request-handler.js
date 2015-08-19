var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

//require http-helpers

exports.handleRequest = function (req, res) {
  res.end(archive.paths.list);
};
