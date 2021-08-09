const glob = require('glob');

// // 阻塞/同步 调用
// var result = null;
// console.time('glob');
// result = glob.sync(__dirname + '/**/*')
// console.timeEnd('glob');//前后两个起始指令，打印glob的执行耗时
// console.log(result);

// 非阻塞/ 异步 调用
var result = null;
console.time('glob');
glob(__dirname + '/**/*', (err, res) => {
    result = res;
    // console.log(result);
    console.log('got result------------');
})
console.timeEnd('glob');
console.log('other task!');