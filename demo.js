async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2');
}

console.log('script start');

setTimeout(function() {
    console.log('setTimeout1');
}, 0);

setTimeout(function() {
    console.log('setTimeout2');
}, 300);

setImmediate(() => console.log('setImmediate'))

process.nextTick(() => console.log('nextTick1'))

async1();

process.nextTick(() => console.log('nextTick2'))

new Promise(function(resolve) {
    console.log("Promise1");
    resolve();
    console.log("Promise2");
}).then(function() {
    console.log("Promise3");
})

console.log('script end');