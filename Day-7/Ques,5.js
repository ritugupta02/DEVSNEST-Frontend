/* 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
 Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.
  Try To Attempt : Difficult Level Increased 
*/

var vol = {
    pi: Math.PI,
    r: 1.93,
    h: 12.665,
};

//console.log(3.14 * vol.r * vol.r * vol.h);

console.log((vol.pi * vol.r * vol.r * vol.h).toFixed(4))