// Description:
// Returns the commom directory path for specified array of full filenames.

//  @param {array} pathes
//  @return {string}
// Examples:

//   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
//   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
//   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
//   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'

function getCommonDirectoryPath(pathes) {
    let arrReduce = pathes.reduce(function(x, y) {
      let index = 0;
      while(index<x.length && x[index] === y[index])
          index++;
      return x.substring(0, index);
    });
    return arrReduce.substr(0,arrReduce.lastIndexOf("/")+1);;
  }