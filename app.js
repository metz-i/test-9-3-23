if (1 !== 1) {
    console.log('tis true')
}

// example 2

let rating = 5
if (rating === 5) {
    console.log('your driver is a platinum driver')
}

// example 3
let num = 37;
if (num % 2 === 0) {
    console.log('even #') 
}

// example 4
let password;

if (password >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid password")
    }
    else {
        console.log("Password is long enough, but cannot contain spaces")
    }
}
else { 
    console.log("Password must be longer")
}
