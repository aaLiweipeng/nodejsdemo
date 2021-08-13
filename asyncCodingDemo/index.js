// interview((res) => {
//     // if (res instanceof Error) {
//     //   return  console.log('interviewee: wocao!');
//     // }
//     // console.log('interviewee: hahahehe!');
//     if (res) {
//         return console.log('interviewee: wocao!');
//     }
//     console.log('interviewee: hahahehe!');
// })

// callback hell
// interview((err) => {
//     if (err) {
//         return console.log('interviewee: wocao! at 1st round');
//     }

//     interview((err) => {
//         if (err) {
//             return console.log('interviewee: wocao! at 2nd round');
//         }

//         interview((err) => {
//             if (err) {
//                 return console.log('interviewee: wocao! at 3rd round');
//             }

//             console.log('interviewee: hahahehe!');
//         });
//     });
// });

// Concurrent tasks
var count = 0;
interview((err) => {
    if (err) {
        return console.log('interviewee: wocao! 1st');
    }
    count++;
});
interview((err) => {
    if (err) {
        return console.log('interviewee: wocao! 2nd');
    }
    count++;

    if (count >= 2) {
        console.log('interviewee: hahahehe!');
    }
});

function interview(callback) {
    setTimeout(() => {
        if (Math.random() < 0.6) {
            callback(null, 'interviewr: success!');
        } else {
            callback(new Error('interviewr: fail!'));
        }
    }, 500)
}