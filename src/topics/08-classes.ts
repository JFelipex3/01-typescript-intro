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
        public name: string, 
        private address?: string
    ) {
        this.name = name;
        this.address = address;
    };
}

// Usar solo cuando se extiende desde un nivel de herencia
export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super( realName, 'New York');
    }
};

const iroman = new Hero('Iroman', 45, 'Tony Stark');

console.log(iroman);