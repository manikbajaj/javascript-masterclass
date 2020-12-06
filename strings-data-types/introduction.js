/*
 * Introduction to string data types and template literals in JavaScript
 * IGTV Link:
 * */

let firstName = "John";
// prettier-ignore
let lastName = 'Doe';
let middleName = `Smith`;

// prettier-ignore
let multiLine = "My name is " + firstName + " " + lastName + "\n"
+ "I am a web developer";

let newMultiLine = `
My name is ${firstName} ${lastName}
I am a web developer
`;

console.log(newMultiLine);
