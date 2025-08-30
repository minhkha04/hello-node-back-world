import sum from "./demo.js";

console.log(sum());

let a = 1 
let b = a

a = 2

console.log(`a = ${a}`);
console.log(`b = ${b}`);


let c = 3
let d = c

d = 4

console.log(`c = ${c}`);
console.log(`d = ${d}`);

let obA = {a: 2}
let obB = obA

obB.a = 3

console.log(`obA.a = ${obA.a}`);
console.log(`obB.a = ${obB.a}`);