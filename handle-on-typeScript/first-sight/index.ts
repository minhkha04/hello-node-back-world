const message: string = "Hello TypeScript!"
const number: number = 42
const isActive: boolean = true
const arrayNumber: number[] = [1, 2, 3, 4, 5]
const array: (string | number | boolean)[] = [1, "two", 3, "four", true]

// tuple: dataType/size/order
let tuple: [string, number?, boolean?]

const map: Map<string, number> = new Map()

map.set("apple", 5)
map.set("banana", 10)

const set: Set<number> = new Set([1, 2, 3])
set.add(3)
set.add(4)

const sum = (a: number, b: number) => a + b

const sum2 = (a: number, b: number): number => {
    return a + b
}

let persion = {
    name: "John",
    age: 30,
}

let persion_2: {
    name: string,
    age: number
} = {
    name: "Jane",
    age: 25
}

enum COLOR {
    RED = "red",
    GREEN = "green",
    BLUE = "blue"
}


class Animal {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    speak(): string {
        return `${this.name} makes a noise.`
    }

    speak1(): void {
        console.log(`${this.name} makes a noise.`)
    }
}


let a1 = new Animal("Dog", 3)

console.log(a1.speak1())

console.log("Hello TypeScript")