function myFunction(pram1, pram2){
    return pram1, pram2;
}
myFunction(2, 4);

//This function adds 2 + 4 so it will retun 6

const addFunction = (pram1, pram2) => {
    return pram1 + pram2;
};
addFunction(2, 4);

// This function is the same as above but with the arrow function included

const addFunction = (pram1, pram2) => pram1 + pram2;

addFunction(2, 4);

/* This function does the same as both above but is now written on 1 line but with ES6 implicit return
so no {} are needed */

const stringFunction = string => string + '!';

stringFunction('My name is bob');

/* This function is how you can be written if only 1 prameter is needed
nottice no () for this arrow function */

const hello = () => console.log('Hello World!');
// This is equal to:

function hello() {
    console.log('Hello World!');
}
// This

const defaultPrams = (a, b =20) => a * b;

defaultPrams(10);

//ES6 default parameters with b already defined so all you need is to define a since b is defualt set

const defaultPrams2 = (a, b=20) => a * b;

defaultPrams2(10, 5);

//Now  same as above but with prameter b is reset to 5 so it is no longer using a default