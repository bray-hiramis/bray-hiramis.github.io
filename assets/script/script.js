/* console.log('Hello World');

// variable declaration: var, let, const
let name = "John Doe";
console.log(name);

// data types: strings, numbers, boolean, array, objects
let strings = 'This is a string'
console.log(strings);

const num = 10;
console.log(num);

let bool = true;
console.log(bool);

let arr = ['name1', 44, -23, 5.5];
console.log(arr);
console.log(arr[0]);
console.log(arr[arr.length - 1]);

// Operators: +, -, *, /, %. ** - exponent
let num1 = 5;
let num2 = 2;
let result = num1 ** num2;
console.log(result);

// function
function myFunc(x = 5) {
    x *= 5;
    return x
}
console.log(myFunc());

function login(name) {
    name = "Bray";
    return `Hello ${name}, welcome to the website`;
}
let myName = login();
console.log(myName);

function mathFuncAdd(x, y) {
    x = 4;
    y = 5;
    return x + y;
}
console.log(mathFuncAdd());

function mathFuncSub(x, y) {
    x = 400;
    y = 5;
    return x - y;
}
console.log(mathFuncSub());

function mathFuncMultiply(x, y) {
    x = 400;
    y = 5;
    return x * y;
}
console.log(mathFuncMultiply());

function mathFuncDivide(x, y) {
    x = 400;
    y = 5;
    return x / y;
}
console.log(mathFuncDivide());

function mathFuncMod(x, y) {
    x = 433;
    y = 5;
    return x % y;
}
console.log(mathFuncMod());

function mathFuncExp(x, y) {
    x = 433;
    y = 5;
    return x ** y;
}
console.log(mathFuncExp());

// Conditional: <, >, =, <=, >=, if/else if
const myNum1 = 40;
const myNum2 = 12;

console.log(myNum1 === myNum2);
console.log(myNum1 < myNum2);
console.log(myNum1 > myNum2);
console.log(myNum1 <= myNum2);
console.log(myNum1 >= myNum2);

if (myNum1 === myNum2) {
    console.loq('Both numbers are equal');
} else {
    console.log('The value is not equal');
}

// Iterate/Loop: for (init, condition, increment)

for (let i = 5; i <= 100; i = i+5) {
    console.log(i);
}

// start with 0 then print odd until 100

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) { // This checks if 'i' is NOT perfectly divisible by 2 (meaning it's odd)
        console.log(i);
    }
}

let myNum3 = 1;
while(myNum3 <= 20) {
    console.log(myNum3);
    myNum3++;
} */


// DOM Manipulation
const body = document.body;
body.append('Hello World');

const div = document.createElement('div');
body.append(div);

div.innerText = "Awesome";
div.textContent = "Nice";
div.innerHTML = "<strong>Nice 1</strong>" // not secured

const strong = document.createElement('strong');
strong.innerText = "Niceu!";
div.append(strong);

const div2 = document.querySelector('div');
console.log(div2);

const spanHi = document.querySelector('#hi');
console.log(spanHi);

const spanBye = document.querySelector('#bye');
console.log(spanBye);
spanBye.remove(); // removing the element
div2.append(spanBye); // re-adding the element

console.log(spanHi.getAttribute('title'));
console.log(spanHi.getAttribute('id'));

console.log(spanHi.setAttribute('id', 'awesome'));
spanHi.removeAttribute('id');

console.log(spanHi.dataset);
console.log(spanHi.dataset.newData = "hi");
console.log(spanHi.dataset);

spanHi.classList.add('newClass');
// spanHi.classList.remove('newClass');
spanHi.classList.toggle('newClass');
spanHi.classList.toggle('className')
spanHi.style.color = 'tomato';
spanHi.style.backgroundColor = "#333";
spanHi.style.padding = "10px 30px";