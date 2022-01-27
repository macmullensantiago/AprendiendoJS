const status = 200;

// if else
if(status == 200) {
    console.log('OK!');
} else if (status === 400) {
    console.log('Error!');
} else {
    console.log('Unknown status');
}

// if terse
if (status == 200) console.log('OK!');
else if (status === 400) console.log('Error');
else console.log('Unknown status');

// if ternary
const status = 400;
let message = '';

if (status === 200) {
    message = 'OK!'
} else {
    message = 'Error!'
}

const message = (status === 200) ? 'OK!' : 'Error!';
console.log(message);
