/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// "5" is a string and 2 is a number. JS automatically converts "5" to a number here, so result is 3.
let result = Number("5") - 2; // Explicitly converting "5" to a number for clarity
console.log("The result is: " + result); // Output: The result is: 3

// Boolean("false") returns true because non-empty strings are truthy in JS
// So this block executes, which may not be what the developer intended
let isValidString = "false";
let isValid = (isValidString === "true"); // Explicitly check if string equals "true"
if (isValid) {
    console.log("This is valid!");
    } else {
    console.log("This is NOT valid!"); // More predictable output
}

// age is a string, so using + with a number will result in string concatenation: "25" + 5 = "255"
let age = "25";
let totalAge = Number(age) + 5; // Convert age to a number before adding
console.log("Total Age: " + totalAge); // Output: Total Age: 30

/*Reason for Fixes:
Number("5") - 2:
Used Number() for clarity and consistency. JavaScript implicitly converts "5" to a number, but it's safer and more readable to do it explicitly.

Boolean("false") issue:

"false" is a truthy value (non-empty string), so Boolean("false") returns true.

To reflect intention (valid only if the string is literally "true"), compare the string directly: isValidString === "true".

"25" + 5 results in "255":

This is string concatenation. Use Number(age) to ensure it's added numerically.*/

// Implicit type conversion example
// Implicit type conversion (string + number)
let implicitResult = "The number is: " + 42;
console.log("Implicit Result:", implicitResult); // "The number is: 42"
console.log("Type of implicitResult:", typeof implicitResult); // string

// Edge Case: null in arithmetic
let nullConversion = null + 5;
console.log("null + 5 =", nullConversion); // 5
console.log("Type of nullConversion:", typeof nullConversion); // number

 /*Explanation:
When using + with a string, JavaScript implicitly converts the number 42 to a string.
null + 5 gets converted to 0, so the result is 5.*/

// Explicit type conversion example
// Explicit conversion from string to number
let inputString = "123";
let convertedNumber = Number(inputString);
console.log("Converted Number:", convertedNumber); // 123
console.log("Type of convertedNumber:", typeof convertedNumber); // number

// Edge Case: converting undefined to a number
let edgeValue = undefined;
let convertedEdge = Number(edgeValue);
console.log("undefined converted to number:", convertedEdge); // NaN
console.log("Type of convertedEdge:", typeof convertedEdge); // number

/*Explanation:
"123" is explicitly converted to a number using Number().
undefined becomes NaN, but its type is still considered "number" in JavaScript.*/
