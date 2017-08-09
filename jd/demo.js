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
page.open('http://www.jd.com/', function (status) {
    if (status === 'success') {
        console.log('成功');
        page.includeJs('https://code.jquery.com/jquery-3.2.1.min.js');
        setTimeout(function () {
            var content = page.evaluate(function () {
                var arr = [];
                $('#seckill .grid_c1 .box_bd .J_sk_list_wrapper .J_sk_list .J_sk_item .sk_item_pic .sk_item_pic_lk>img').each(function (index, item) {
                    // console.log(item);
                    if($(item).attr('src').length >= 50) {
                        arr.push($(item).attr('src'));
                    }

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