const evnetloop = {
    queue: [],

    loop() {
        //执行时，队列不为空
        while (this.queue.length) {
            var callback = this.queue.shift();
            callback();// 取出队列元素，执行任务元素
        }

        // loop执行结束前，又调用一次loop，使得每隔500ms，执行一次 loop
        setTimeout(this.loop.bind(this), 500);
    },

    // 入队
    add(callback) {
        this.queue.push(callback)
    }
}

evnetloop.loop()
setTimeout(() => {
    evnetloop.add(function() {
        console.log(1111);
        console.log(new Date().Format("yyyy-MM-dd hh:mm:ss"));
    })
}, 500);

setTimeout(() => {
    evnetloop.add(function () {
        console.log('\n' + 22222);
        console.log(new Date().Format("yyyy-MM-dd hh:mm:ss"));
    })
}, 1800);


Date.prototype.Format = function (fmt) { // author: meizz
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
