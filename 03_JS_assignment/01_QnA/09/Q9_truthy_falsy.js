// 09. Boolean value is either true or false.

// - Write three JavaScript statement example which provide truthy value.
// =>truthy values are those values which are considered true when encountred with boolean context. All the values are truthy unleass they define as falsy
const userName = 'Snehal';
let age = 23;
let student = true;

if(userName){
    console.log(userName);
}
if(age){
    console.log(age);
}
if(student){
    console.log(student);
}



// - Write three JavaScript statement example which provide falsy value.

let userName1;
let age1 = 0;
let student1 = false;

console.log("falsy values");

if(userName1){
    console.log(userName1);
}

if(age1){
    console.log(age1);
}

if(student1){
    console.log(student1);
}
console.log("falsy values are not reachable")
