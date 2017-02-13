var path = require("path");
module.exports = {
    entry: ['./js/page/swiper-3.4.0.min.js','./js/page/angular.js','./js/page/angular-route.js','./js/index.js','./js/home.js','./js/shopCar.js','./js/classes.js'],//入口文件
    output: {//输出文件
        path: path.join(__dirname, './out'), 
        filename: 'single.js'
    }
};