var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

//require http-helpers
//Posts from client

exports.handleRequest = function (req, res) {
  //request object, type GET
  //pick up url, lookup url in paths.list and send that data

  if(req.method === 'GET'){

  }

  res.end(archive.paths.list);
};


// http.get(hostname, function(res){
//   console.log("Status: "+ res.statusCode);

// }).on('error', function(err){
//   throw err;
// });
