(() => {
    var promise = interview();

    // demo test
    // promise
    //     .then((res) => {
    //         console.log('interviewee: hehehe!');
    //     })
    //     .catch((err) => {
    //         console.log('interviewee: wocaowocao!');
    //     })

    // promise second return
    // var promise2 = promise
    //     .then((res) => {
    //         console.log('interviewee: hehehe!');
    //         // throw new Error('baibaibaibai!');
    //         return 'OKOK!Nice!';
    //     })

    var promise2 = promise
        .then((res) => {
            console.log('interviewee: hehehe! Let me hava a think!!');

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('At 900ms[400ms later], think end!');
                    resolve('OKOK!Nice!')
                }, 400);
            })
        })

    setTimeout(() => {
        console.log('At 600ms, promise ---- ', promise);
        console.log('At 600ms, promise2 ---- ', promise2);
    }, 600);
    setTimeout(() => {
        console.log('At 1000ms, promise ---- ', promise);
        console.log('At 1000ms, promise2 ---- ', promise2);
    }, 1000);

    function interview() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('At 500ms, 出面试结果了 ---- ');

                // if (Math.random() < 0.6) {
                if (Math.random() < 1) {
                    resolve(null, 'interviewr: success!');
                } else {
                    reject(new Error('interviewr: fail!'));
                }
            }, 500)
        })
    }
})();