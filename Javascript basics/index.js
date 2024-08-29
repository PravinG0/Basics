let myName = 'pravin';
console.log(myName);

// connot be a reserved keyword
//should be meaningful
//cannot start with number (1name)
//cannot contain a space or hyphen (-)
//are case- sensitive

let interstRate = 0.3;
interstRate = 1;
console.log(interstRate);

//using let value will be changed

const myrate = 0.3;
console.log(myrate); 

// Primitives / Value Types
//--> String            
//--> Number       
//--> Boolean      
//--> Undefined    
//--> null        

let firstName = 'Mosh'; //String Literal
let age ='30'; // Number Literal
let isApproved = true; // Boolean Literal
let lastName = undefined;
let selectedColor = null;

// Dynamic typing
//Java script is Dynamic language - we can change the value of assiged let variable later

// Reference Types
// --> Object
// --> Array
// --> Function

// Object 
let person ={
      firstName: 'Mosh',
      age: 30
}
// Dot Notation
person.firstName = 'John';
//Bracket Notation
let selection = 'firstName';
person[selection]='Mary';

console.log(person.firstName);

//Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors[2]);

//Function
//--Building block in javascript

function greet(name, lastName){
      console.log('Hello ' + name +' ' + lastName);
}
greet('John', 'Smith');
//calculating a value
function square(number){
      return number * number;
}
console.log(square(2));

function changeColor(color){
      document.querySelector('.box').style.color = color;

}
// --------------------------------------------------------------------------------------
//event Loop and Asynchronous

//Call Stack, Web APIs, Callback Queue, event loop

//Web APIs - its not javaScript, its works in Browser, below are web apis
//setTimeout()
//DOM APIs
//fetch()
//console

console.log("Start");
setTimeout(function cb() {
      console.log("Callback");
}, 5000);

console.log("End");

setTimeout(myFunction, 3000);
function myFunction() {
    document.getElementById("demo").innerHTML = "I love You!!";
}


document.addEventListener("click", function () {
      document.getElementById("demo").innerHTML = "Hello World";
  }) ;