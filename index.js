"use strict"

/*1. Can we put duplicate values in the set object ? */

var mySet = new Set([1, 2, 3, 2, 1]);

// no javascript automatically removed 

var mySet = new Set([1, 2, 3]);


/*2. Write the syntax for
a) Creating new set object
b) Adding new element to set object
c) Deleting element from set object*/

//a) Creating new set object

  var mySet = new Set([1,2,3]);

//b) Adding a new element to a set object
  mySet.add(element);
  
//c) Deleting element from set object

  mySet.delete(element1);


/*3. Create a set object with four random numbers from 0 to 10. Check if this
newly created set object has 8 in it. Use set object methods. */


let MySet = new Set();

// Adding 4 random numbers to the set
while (MySet.size < 4) {
  MySet.add(Math.floor(Math.random() * 11)); // Generate random number from 0 to 10
}

// Checking if the set contains the number 8
if (MySet.has(8)) {
  console.log("The set contains the number 8.");
} else {
  console.log("The set does not contain the number 8.");
}

