var path = require('path');
var archive = require('../helpers/archive-helpers');
var headers = require('./http-helpers');
// require more modules/folders here!

//require http-helpers
//Posts from client
var body = "";





exports.handleRequest = function (req, res) {
  //request object, type GET
  //pick up url, lookup url in paths.list and send that data

  // var statusCode = 200;
  // headers.headers['Content-Type'] = "application/json";

console.log("Serving request type " + req.method + " for url " + req.url);
  if(req.method === 'POST'){
    statusCode = 201;
    req.on('data', function(data){
      body += data;
      //serveAssets called to create location object---
      //var location = {"Location: headers.serveAssets(body)"}
      console.log(body, "data as recieved by local server");
    });

    req.on('end', function(){
      console.log(headers.headers, "headers in end");
       // call serverAssets for redirects
      headers.serveAssets(res, body);
    })
    // res.writeHead(statusCode, headers.headers);
    res.end('{}');
    //call header.serveAssets on data which is our url

  }


  if(req.method === 'OPTIONS'){
    res.writeHead(201, headers.headers);
    res.end('{}');
  }

};




// http.get(hostname, function(res){
//   console.log("Status: "+ res.statusCode);

// }).on('error', function(err){
//   throw err;
// });

