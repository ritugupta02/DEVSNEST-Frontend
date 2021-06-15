/* 3. Write a JavaScript program to get the length of a JavaScript object.  
Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
*/


var student =
{
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

var l = Object.keys(student).length;
console.log(l);


/*
The Object.keys() method is used to return the object property name as an array.
 The length property is used to get the number of keys present in the object. It gives the length of the object.
 */