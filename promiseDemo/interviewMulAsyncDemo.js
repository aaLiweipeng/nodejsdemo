(() => {
    var promise = interview(1)
        .then(() => {
            // interview(1) 返回的 promise resolve了，走这里！
            return interview(2);
        })
        .then(() => {
            // interview(2) 返回的 promise resolve了，走这里！
            return interview(3);
        })
        .then(() => {
            // interview(3) 返回的 promise resolve了，走这里！
            console.log('Hehehehe!Nice!')
        })
        .catch((err) => {
            // 任何一个promise reject了，走这里！
            console.log('wocao! Round: ' + err.round);
        });

    // round: 面试轮数
    function interview(round) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('出面试结果了 ---- Round:  ', round);

                // if (Math.random() < 0.6) {
                if (Math.random() < 0.7) {
                    resolve(null, 'interviewr: success!');
                } else {
                    var error = new Error('interviewr: fail!')
                    error.round = round
                    reject(error);
                }
            }, 500)
        })
    }
})();