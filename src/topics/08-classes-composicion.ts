// Forma Larga
// export class Person {
//     public name: string;
//     private address: string;

//     constructor(name: string, address: string) {
//         this.name = name;
//         this.address = address;
//     };
// }

// Forma Corta - Injección de dependencias
export class Person {

    constructor(
        public firstName: string,
        public lastName: string, 
        private address?: string
    ) {};
}

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {}
};

const tony = new Person('Tony', 'Stark', 'New York');
const iroman = new Hero('Iroman', 45, 'Tony Stark', tony);

console.log(iroman);