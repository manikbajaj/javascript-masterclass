/*
 * Introduction to character literals in JavaScript
 * IGTV Link:
 *
 * Topics Covered:
 * 1. \" - for escaping double quotes
 * 2. \' - for escaping single quotes
 * 3. \\ - for rendering a '\'
 * 4. \n - for adding a new line
 * */

/*
 * \b	Backspace
 * \f	Form Feed
 * \n	New Line
 * \r	Carriage Return
 * \t	Horizontal Tabulator
 * \v	Vertical Tabulator
 * */

/*Declare variables holding some strings*/
// prettier-ignore
let intro = "My name is \"John Doe\"";
let fathersName = "My father's name is Mark Doe";
// prettier-ignore
let intro2 = "My name is John Doe \\ ";
let intro3 = "My name is John Doe \n";

console.log(intro3 + fathersName);
