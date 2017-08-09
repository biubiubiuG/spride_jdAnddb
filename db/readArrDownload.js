/**
 * Created by dllo on 17/8/9.
 */
var fs = require('fs');
var download = require('./download')
fs.readFile('./arr.txt','utf-8',function (error,data) {
    var array = data.split(',')
    array.forEach(function (item,index) {
        console.log(item);
        download(item,'img', index + '.jpg')
    })
})