"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "Hello, TypeScript!";
greeting = "Welcome to TypeScript programming.";
var pi = 3.14159;
console.log(typeof pi.toFixed(3));
console.log(greeting);
var tmp1;
function tmp() {
    return 'Temporary function';
}
var createUser = function (user) {
    return user;
};
var user = createUser({ age: 25, name: "Alice" });
console.log(user);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person = new Person("Bob", 30);
console.log(person);
var skills = ["TypeScript", 2024, true];
console.log(skills);
var skills2 = ["JavaScript"];
console.log(skills2);
var Color;
(function (Color) {
    Color["Red"] = "#FF0000";
    Color["Green"] = "#00FF00";
    Color["Blue"] = "#0000FF";
})(Color || (Color = {}));
var favoriteColor = Color.Blue;
console.log(favoriteColor);
function test(a, b) {
    return a.length;
}
console.log(test(true, false));
var Animal = /** @class */ (function () {
    function Animal(type, age) {
        this.type = type;
        this.age = age;
    }
    Animal.prototype.makeSound = function () {
        console.log("Some generic sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, type) {
        var _this = _super.call(this, type, age) || this;
        _this.name = name;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Bark");
    };
    return Dog;
}(Animal));
var dog = new Dog("Dog", 5, "Mammal");
dog.makeSound();
console.log(dog);
