// async/await in action
function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve,ms);
    });
}

async function simulateLongOperation() {
    await promiseTimeout(1000);
    return 42;
}

async function run() {
    const answer = await simulateLongOperation();
    console.log(answer);
}

run();

function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async fucntion longRunningOperation() {
    // logic
    console.log('Start!!')
    await promiseTimeout(2000);

    const response = await longRunningOperation();
    console.log(response);

    console.log('Stop!!');
}

async function run() {
    // logic
    console.log('Start!!')
    promiseTimeout(2000);
    console.log('Stop!!');
}

run();
