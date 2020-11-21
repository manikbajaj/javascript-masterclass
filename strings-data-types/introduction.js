/*
* Introduction to string data types in JavaScript
* */
let firstName = "John";
let lastName = 'Doe';
let middleName = `Smith`;

let multiLine = "My name is" +
	firstName + " " + lastName + "\n"
	+ "I am a web developer";

let newMultiLine = `
My name is ${firstName} ${lastName}
I am a web developer
`;

console.log(newMultiLine);
