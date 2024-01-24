// No se suele generar decoradores
// Un decorador es una función, que se puede adjuntar en las clases, propiedades o metodos
function classDecorator<T extends new (...args: any[]) => {}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

// Los decoradores definen el comportamiento de la clase o agregar funcionalidades
@classDecorator
export class SuperClass {

    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);