(() => {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // 300ms后 resolve
            // resolve(666);

            // 300ms后 reject
            reject(new Error(666));
        }, 300);

        // setTimeout(() => {
        //     // 500ms后 尝试reject
        //     reject(new Error());
        // }, 500);
    }).then((res) => {
        console.log('then from resolved --- ', res);
    }).catch((err) => {
        console.log('catch from rejected --- ', err);
    });

    console.log('after the promise --- ', promise);

    setTimeout(() => {
        // 800ms后 打印promise状态
        console.log('800ms later', promise);
    }, 800);
})();