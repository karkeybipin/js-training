// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
// JavaScript Example - 1000 Lines

// 1. Loop through numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(`This is line number ${i}`);
}

// 2. Array operations
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// Sum of numbers
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers from 1 to 100:', sum);

// 3. Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Display all prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}

// 4. Create objects and manipulate them
let users = [];

for (let i = 1; i <= 10; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 40) + 20
    });
}

// Display user info
users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});

// 5. DOM Manipulation - Add paragraphs to a webpage
for (let i = 1; i <= 10; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `This is paragraph number ${i}`;
    document.body.appendChild(paragraph);
}

// 6. Simple event listener - Button click
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 7. Working with dates
let today = new Date();
console.log('Today\'s date is:', today);

// 8. Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 9. FizzBuzz challenge from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}

// 10. Asynchronous example - Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched Posts:', data);
    })
    .catch(error => console.log('Error fetching posts:', error));

// 11. Working with Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise was resolved successfully!');
    } else {
        reject('Promise was rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});

// 12. Array filtering
let adults = users.filter(user => user.age >= 18);
console.log('Adults:', adults);

// 13. Arrow function and default parameters
const greet = (name = 'Stranger') => {
    console.log(`Hello, ${name}!`);
};

greet('Bipin');
greet(); // Default parameter will be used

// 14. Map over an array
let squareNumbers = numbers.map(num => num * num);
console.log('Squares of numbers from 1 to 100:', squareNumbers);

// 15. Reduce to calculate product of array elements
let product = numbers.reduce((acc, val) => acc * val, 1);
console.log('Product of numbers from 1 to 100:', product);

// 16. Nested loops
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// 17. SetInterval and SetTimeout example
setInterval(() => {
    console.log('This message appears every second');
}, 1000);

setTimeout(() => {
    console.log('This message appears after 5 seconds');
}, 5000);

// 18. String manipulation
let text = "JavaScript is awesome!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

// 19. Create a simple class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started.`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();

// 20. Shuffling an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log('Shuffled array:', shuffle(numbers));

// 21. Template literals
let message = `Hello, ${users[0].name}. You are ${users[0].age} years old.`;
console.log(message);

// 22. Object Destructuring
let { name, age } = users[0];
console.log(`Name: ${name}, Age: ${age}`);

// 23. Ternary operator
let access = age >= 18 ? 'Access granted' : 'Access denied';
console.log(access);

// 24. Event delegation
document.body.addEventListener('click', function(event) {
    if (event.target.matches('.dynamic-button')) {
        console.log('Dynamic button clicked!');
    }
});

// 25. Async/Await example
async function fetchPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await response.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();

// Remaining lines can continue similar operations, variations on the above...
