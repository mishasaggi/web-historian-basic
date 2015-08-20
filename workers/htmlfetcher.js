// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.

//GET request
var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var httpNode = require('http');
var archiveHelpers = require('../helpers/archive-helpers');

//create the difference array
//content negotiation
//path is default '\'
//hostname is the target url

var dummyList = ['www.google.com', 'www.yahoo.com', 'www.makersquare.com'];
var siteData;

var options = {
  hostname: 'www.google.com',
  method: 'GET',
  headers: {
    'Accept-Charset': 'utf8'
  }
}

var req = http.request(options, function(res){
  console.log("Status: "+ res.statusCode);
  res.on('data', function(data){
    siteData = data;
  });

});
console.log(siteData, "data");
req.on('error', function(err){
  throw err;
});

// archiveHelpers.downloadUrl
console.log(req, "request object");
req.end();

//open get request

/*
//calls the end automatically
http.get(hostname, function(res){
  console.log("Status: "+ res.statusCode);

}).on('error', function(err){
  throw err;
});
*/
