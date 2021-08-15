(() => {
    Promise.all([
        interview('baidu'),
        interview('xiaomi')
    ])
    .then(() => {
        console.log('interviewr: Hehehehe!');
    })
    .catch((err) => {
        console.log('interviewr: wocao! For: ' + err.companyName);
    })

    // round: 面试轮数
    function interview(companyName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('出面试结果了 ---- companyName:  ', companyName);

                // if (Math.random() < 0.6) {
                if (Math.random() < 0.7) {
                    resolve(null, 'interviewr: success!');
                } else {
                    var error = new Error('interviewr: fail!')
                    error.companyName = companyName
                    reject(error);
                }
            }, 500)
        })
    }
})();