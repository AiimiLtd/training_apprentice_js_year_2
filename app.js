console.log('Hello Aiimi\'ers');
/*
// Previous covered
// Example Object Literal:
let person = {
  name: 'John Doe',
  age: 30,
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

// Example Array Literal:
let fruits = ['apple', 'banana', 'cherry'];

// Example for loop:
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Example Logic if statement:
let age = 18;
if (age >= 18) {
  console.log('You are an adult.');
}

// Example Function Declaration:
function greet(name) {
  console.log('Hello, ' + name + '!');
}
greet('Alice');
*/

/*
// Document Object Model (DOM) manipulation
console,log(window);
console.log(document);

let example = document.getElementById('example');

console.log(example);

// Manipulating DOM element
example.innerHTML = 'Hello Aiimi\'ers!';
example.style.color = 'red';

// Append a new element to the DOM
let newElement = document.createElement('p');
newElement.textContent = 'This is a new paragraph.';
example.appendChild(newElement);
*/

/*
// Dom Events and event listener
myFunction = () => {
  console.log('on click event triggered!');
};

// show different event types
document.getElementById('btn').addEventListener('click', myFunction);
*/

// Fetch data from API and async/await
/*
// Example 1 (promise): 
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error('Error:', error));
*/

/*
// Example 2 (async await):
async function getData(url) { 
    let response = await fetch(url);  
    let data = await response.json();
    return data;  
}

getData('https://jsonplaceholder.typicode.com/todos/1')
*/

/*
// Example 3 (async await with error handling):
async function getData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

getData('https://jsonplaceholder.typicode.com/todos/1')
*/