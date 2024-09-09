
/* task-1Access the `golden rod` color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

//solution:

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520',

};

console.log( colors["golden rod"])

 */



/* --------------------------------------------------------------------------------
Task-2 For this object below add a property named `passenger capacity` with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

//solution:

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car["passenger capacity"] = 5;
console.log(car);

*/




/*--------------------------------------------
Task-3 Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

//solution:
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.subject)

*/





/*-----------------------------------------

 Task-4 Count the `number of properties`.

**Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

**Output: 4 

//solution:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let count = Object.keys(student).length;
0
console.log('Number of properties is:' , count);

*/



/* ---------------------------------------------------------------------------------

Task-5 (Hard) Loop through an object and print the key-value pairs with their `types`

**Input:

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

**Output:
    key: name | type:  string
    key: age | type:  number
    key: city | type:  string
    key: isStudent | type:  boolean

 
 //solution:   

 let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'New York City',
    isStudent: true

};

// We have to put same kw name (e.g prop/ keys or any suitable name) inside for loop bracket. 
// Here I used "prop" instead of key because I already use "key" Text.

for(let prop in myObject ){
    console.log('key:', prop , '|', "type:", (typeof myObject[prop]));
}


*/

