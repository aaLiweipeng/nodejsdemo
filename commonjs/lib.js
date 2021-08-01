// console.log('hello , Wellcome to require me, I am lib.js!!');

// exports.heheda = 'hehehe'
// exports.add = function (a, b) {
//     return a + b;
// }
// exports.luelue = { heheda: '666' }

// module.exports = function minus(a,b) {
//     return a - b;
// }

// setTimeout(() => {
//     console.log('\nlib exports --- \n', exports);
//     console.log('\nlib module.exports --- \n', module.exports);
// }, 2000)

module.exports = function (playerAction) {
    var random = Math.random() * 3;

    if (random < 1) {
        var computerAction = 'rock'
    } else if (random > 2) {
        var computerAction = 'scissor'
    } else {
        var computerAction = 'paper'
    }
    console.log('computer played --- \n', computerAction);

    if (computerAction == playerAction) {
        console.log('平局\n');
        return 0;
    } else if (
        (computerAction === 'rock' && playerAction === 'paper') ||
        (computerAction === 'scissor' && playerAction === 'rock') ||
        (computerAction === 'paper' && playerAction === 'scissor')) {
        console.log('你赢了\n');
        return -1;
    } else {
        console.log('你输了\n');
        return 1;
    }
}