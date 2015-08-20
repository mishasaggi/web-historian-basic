var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  // "acccess-control-allow-credentials: true",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)

// var archiveUrls = archive.readListOfUrls();
  //check if asset in list

  if(archive.isUrlInList(asset)){
        //if in list, check if archived
    if(archive.isUrlArchived(asset){
      //if archived re-route (serve it)
      return archive.redirect(asset);
    } else {
    // if not archived, response message - come back later - robots working
      return archive.redirect();
    }
  } else {

    archive.addUrlToList(asset);
    // if not archived, response message - come back later - robots working
    return archive.redirect();

  }

};

exports.redirect = function(asset) {
  var page;

  if(asset){
    page = archive.paths.archivedSites+"/"+asset;

  } else {
    //loading
    page = '/loading.html';
  }
  return page;
}


// As you progress, keep thinking about what helper functions you can put here!

