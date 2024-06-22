
//Una forma de declarar una clase es como la siguiente 

// export class Person {
//     public name: string;
//     public address: string;

//     constructor() {
//         this.name = 'Alexandros';
//         this.address = 'California, USA';
//     }
// }

//Pero lo correcto para un modelo con base de datos es solo con el constructor.

export class Person {
    constructor(
        public name: string,
        public lastName: string,
        public address: string = 'No Address',
    ) {}
}

export class Hero{
    constructor(
        public name: string,
        public address: string,
        public age: number,
        public person: Person
    ) {
        // super(name, address);
    }
}

const tony = new Person('Tony', 'Stark', 'California, USA');
const ironman = new Hero('IronMan', 'California, USA', 25, tony);

console.log(ironman);
// console.log(ironman.address)