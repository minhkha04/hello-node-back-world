let  greeting: string = "Hello, TypeScript!";

greeting = "Welcome to TypeScript programming.";

let pi = 3.14159;

console.log(typeof pi.toFixed(3));

console.log(greeting);

let tmp1: number;

function tmp() {
    return 'Temporary function';
}

type User = {
    name: string;
    age: number;
};

const createUser = (user: User): User => {
    return user;
}

let user = createUser({age: 25, name: "Alice"});

console.log(user);

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let person = new Person("Bob", 30);
console.log(person);

let skills: [string, number, boolean] = ["TypeScript", 2024, true];
console.log(skills);

let skills2: (string | number | boolean)[] = ["JavaScript"];
console.log(skills2);

enum Color {
    Red = '#FF0000',
    Green = '#00FF00',
    Blue = '#0000FF'
}

let favoriteColor = Color.Blue;

console.log(favoriteColor);

function test(a: string, b: string): string;
function test(a: number, b: number): number;
function test(a: boolean, b: boolean): boolean;
function test(a: any, b: any) {
    return a.length;
}
console.log(test(true, false));

class Animal {
    type: string;
    age: number;
    constructor(type: string, age: number) {
        this.type = type;
        this.age = age;
    }
    makeSound() {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    name: string;
    constructor(name: string, age: number, type: string) {
        super(type, age);
        this.name = name;
    }
    
    makeSound() {
        console.log("Bark");
    }
}

let dog: Animal = new Dog("Dog", 5, "Mammal");
dog.makeSound();
console.log(dog);

export {};