// console.log('start require');
// var lib = require('./lib.js')
// console.log('end require --- ');
// console.log('require module output --- ', lib);

// lib.indexAdditional = 'hehe'

// console.log('process.argv log --- \n', process.argv);
// var playerAction = process.argv[process.argv.length - 1];
// console.log('you played --- \n', playerAction);

const game = require('./lib')

let count = 0;
process.stdin.on('data', event => {
    const playerAction = event.toString().trim();
    console.log('you played --- \n', playerAction);

    const result = game(playerAction)

    if (result == -1) {
        count++;
    }
    if (count === 3) {
        console.log('你混蛋~ 你耍赖~ 我不玩儿了！！');
        process.exit();
    }
})