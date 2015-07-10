var worker = require('node_helper');

var request = require("request");
  var cheerio = require("cheerio");
  require('shelljs/global');
console.log(env['kk']);
 request({
    url: "http://blog.infographics.tw",
    method: "GET"
  }, function(e,r,b) {
    if(!e) console.log(b);
  });