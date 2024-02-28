// Task 1 Research
/**
 *What are the primitive data types?
 * byte
 * short
 * int
 * long
 * float
 * double
 * char
 * boolean
 * 
 * Complex data types:
 * Object: an object is a collection of properties, where each property is a key value pair. object can be used to represent real world objects, such as a person or a car.
 * array: an array is a special type of object that is used to store a collection of values. arrays can be used to store a list of numbers, strings, or other objects.
 * function: a function is a block of code that can be executed when it is called.functions can be used to perform a specific task such as calculating the sum of two numbers.
 * Date: a date object is used to represent a specific point in time. It can be used to perform operations on dates, such as calculating the difference between two dates.
 * regExp: a regular expression is a pattern that can be used to search an manipulate strings. it can be used to find and replace text in a string, or to validate the format of a string.
 /**
  * What is the spread operator?
  * Spread oeprator is a syntax used in javascript that allows you to quickly and easily copy the contents of an array or object, or to merge the contents of multiple arrays or objects into a single array or object. the spread operator is denoted by three dots (`...`)
  * Spread operator can be used to copy an array, merge an array, copy an object, and merge an object.
  * 
  * 
  * Math object three methods and their use.
  * Methods in math object:
  * Math.abs(x): Returns the absolute value of a number. The absolute value of a number is its distance from zero, regardless of direction. For example, Math.abs(-5) returns 5, and Math.abs(5) returns 5.
Math.round(x): Returns the nearest integer to a number. For example, Math.round(3.7) returns 4, and Math.round(4.3) returns 4.
Math.random(): Returns a random number between 0 (inclusive) and 1 (exclusive). For example, Math.random() might return 0.23456789, or 0.98765432.
/**
 * 
 * Array method in javascript
 * push-adds one or more elements to the end of an array. returns the new length of an array.
 * pop - removes the last element from an array and returns that value. If the array is empty, it returns undefined.
 * Sort-sorts the elements of an array in place and returns the array. by default the elements are sorted as strings in alphabetical order.
 * 
 *String Methods in Javascript- a function that can be called on a string object to perform a specific task. string methods are used to manipulate the contents of a string such as converting the string to upper or lower case, searching for a sub string or replacing a sub string.
/**
 * some common string methods include
 * touppercase() converts all the characters in a string to uppercase
 * toLowerCase() converts all the characters in a string to lowercase
 * indexOf(searchValue) - searches for a specified value in a string and returns the index of the first occurence of the value.
 * replace(searchValue, replaceValue) searches for a specified value in a string and replaces it with another value.
 * 
 * does a string have indexes? yes a string is a sequence of characters, and each character in the string has a corresponding index. the index of the first character in a string is 0, the second character is 1 and so on.
 * 
 * how can we access different items in an array? using bracket notation.
 * 
 * 
 * how can we access different properties in an object? dot notation or bracket notation
 * 
 * how to check the strings length? length property of a string, the length property returns the number of characters in a string.
 * substring method is used to extract a portion of a string
 * slice method is used to extract a portion of a string.
 * 
 * check length of an array using the length property
 */
 /**
  * 
  */

 const firstName = 'John';
 const lastName = 'Conner';
 const lovesToCode = true;

 function getFullName (firstName, lastName) {
   return `${firstName} ${lastName}`;
 }

 const fullName = getFullName('John', 'Conner');
 console.log(fullName); 
 



 
