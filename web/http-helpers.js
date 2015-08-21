var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var _ = require('underscore');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  // "acccess-control-allow-credentials: true",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, cb) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)

// var archiveUrls = archive.readListOfUrls();
  //check if asset in list
  // cb = cb || _.identity;
  console.log("Here serving assets");

    //callback here is writeHeader, res.writeHeader
  if(archive.isUrlInList(asset)){
        //if in list, check if archived
    if(archive.isUrlArchived(asset)){
      //if archived re-route (serve it)
      exports.headers["Location"] = exports.redirect(asset);
      return res.writeHead(302, exports.headers);
    } else {
    // if not archived, response message - come back later - robots working
      exports.headers["Location"] = exports.redirect();
      return res.writeHead(302, exports.headers);
    }
  } else {

    archive.addUrlToList(asset);
    // if not archived, response message - come back later - robots working
    exports.headers["Location"] = exports.redirect();
      return res.writeHead(302, exports.headers);

  }

};

exports.redirect = function(asset) {
  var page;

  if(asset){
    page = archive.paths.archivedSites+"/"+asset+"\n blah";

  } else {
    //loading
    page = '/loading.html';
  }
  return page;
}


// As you progress, keep thinking about what helper functions you can put here!

