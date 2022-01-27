const name = '';

if (!name) {
    console.log('We have a name!');
} else {
    console.log('We have a name!');
}

const status = 'error';

if (status.toUpperCase() === 'ERROR') {
    console.log('Something went wrong!');
} else {
    console.log('Looks great!!');
}

const name = '';

if (name) {
    console.log('We have a name!');
} else {
    console.log('No name provided');
}

const status = 200;

if (status === 200) {
    console.log('OK!');
} else if (status === 400 || status === 500) {
    console.log('Error!');
} else {
    console.log('Unknown status');
}

const status = 500;

switch(status) {
    case 200:
        console.log('OK!');
        break;
    case 400: // or
    case 500: // or
        console.log('Error!');
    default: // else
        console.log('Unknown status');
        break;
}
