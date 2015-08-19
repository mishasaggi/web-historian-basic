var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(cb){
  //might use paths.list in the actual uses
  //in fileread, format and callback are optional arguments. Passing callbacks to apply later to this helper function
  cb = cb || _.identity;

  fs.readFile(exports.paths.list, 'utf8', function(err, data){
    if(err){
      throw err;
      console.log('error!');
    }
    var listOfUrls = data.toString().split("\n");
    console.log("listfrom sites.txt", listOfUrls);
    return cb(listOfUrls);
  });

};

exports.isUrlInList = function(url, cb){
  //is the URL clients asked for in sites.txt
  //return boolean to whatever is taking the next step
  //url - what I'm looking for
  //path(.list in this case) Where I'm looking for it
  cb = cb || _.identity;
  var isItThere = _.contains(exports.readListOfUrls(), url) // arguments : anyVar, cb
  return cb(isItThere);

};

exports.addUrlToList = function(url, cb){
  //user posts a url, if not in list (above) add it
  //how to append to the file

  console.log(url,typeof(url), "this is the url");
  fs.appendFile(exports.paths.list, url, function(err){
    if(err) throw err;
  })
  console.log(exports.isUrlInList(url));
  return cb();

};

exports.isUrlArchived = function(url, cb){
  // it is going to check after getting a true isURLinList
  //check the path names and  look into existing routes (it'll exist if crone has run already)
  //return boolean
  //fs.stat stats.isFile() state-ed( stat vs lstat)
  cb = cb || _.identity;
  console.log(exports.paths.archivedSites+"/"+url, "check!!!");
  var isItThere = fs.stat(exports.paths.archivedSites+"/"+url, function(err, stat){
    if(err) return false;
    if(err === null) return true;
  });

  return cb(isItThere);

};

//where is the logic for finding the pending urls to be downloaded
//what to download? difference of isUrlInList and isUrlArchived as an array

exports.downloadUrls = function(listofUrls, data){
  //crone will run this periodically
  //get request to actual sites for downloading all content
  //look into existing routes so crone doesn't re-download the sites
  //fs.writeFileSync() vs Async might create empty files// !!!BUG!!!
console.log(listofUrls, "argument");
  _.each(listofUrls, function(fileName){
    fs.writeFileSync(exports.paths.archivedSites+"/"+fileName, data);
    console.log(exports.paths.archivedSites+"/"+fileName);
  })

//filenames are picked up from the readArray and added to absol path - Yes



};
