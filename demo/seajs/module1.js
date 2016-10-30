define(function (require,exports,module) {
    /*console.log("开始执行");
    //代码执行到这里就去请求module2.js的代码，就会有阻塞现象
    //等请求完module2.js的代码才会执行下面的代码，就会造成页面有卡顿的
    var module = require("./module2.js");
    console.log("结束执行");*/


    console.log("开始执行");
    //所以我们要异步的去加载外部依赖文件，在回调函数里面执行返回结果
    
    require.async("./module2.js",function (module2) {
        
    });
    //在请求的同时，下面的代码继续执行
    console.log("结束执行");

});