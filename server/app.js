// var compress = require('compression');
var express = require('express');
var bodyParser = require('body-parser');
// var hbs = require('hbs');

var port = process.env.PORT || 3000;
var app = express();
// // view 层指定
// app.set('views','./views');
// // view 编译语言
// app.set('view engine','hbs');
// app.use(compress());
// app.use(express.compress());
//hbs子模板路径
// hbs.registerPartials(__dirname + '/views/component');
// // hbs.registerPartials(__dirname + '/views/web/component');
// //hbs自定义helper
// hbshelper();
// 指定view资源文件目录
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// web 服务
app.listen(port,function(){
    console.log('service is start on port ' + port);
});
//
// app.all('*',function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//
//     if (req.method == 'OPTIONS') {
//         res.send(200); //让options请求快速返回
//     }
//     else {
//         next();
//     }
// });
// 引入路由
require('./routes')(app);
