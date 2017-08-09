/**
 * Created by dllo on 17/8/9.
 */
var webpage = require('webpage');
var page = webpage.create();
var fs = require('fs');
phantom.outputEncoding = 'utf-8';
page.onConsoleMessage = function (msg, lineNum, sourceId) {
    // console.log('CONSOLE:' + msg);
};
page.open('http://www.douban.com/', function (status) {
    if (status === 'success') {
        console.log('成功');
        page.includeJs('https://code.jquery.com/jquery-3.2.1.min.js');
        setTimeout(function () {
            var content = page.evaluate(function () {
                var arr = [];
                $('#anony-video .wrapper .main ul li .video-cover a').each(function (index, item) {
                    // console.log(item);
                    arr.push($(item).css('backgroundImage').replace('url(','').replace(')',''));
                });
                return arr;
            });
            console.log(content)
            fs.write('./arr.txt', content, 'w');
            phantom.exit(0);
        }, 3000);
    } else {
        console.log('失败');
        phantom.exit(0);
    }
});