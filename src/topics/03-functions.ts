
function addNumbers(a: number, b: number): number {
    return a + b;
}

const result: number = addNumbers(1, 2);
const resultString: string = addNumbers(1, 2).toString();

console.log({result});
console.log({resultString});

// Definir función de flecha
const addNumbersArrow = (a: number, b: number): number => {
    return a + b;
}

const resultArrow: number = addNumbersArrow(1, 2);
console.log({resultArrow});

const addNumbersArrowString = (a: number, b: number): string => {
    return `${a + b}`;
}

const resultArrowString: string = addNumbersArrowString(1, 2);
console.log({resultArrowString});

// Definir función con parametros obligatorios, opcionales y por defecto
// Orden siempre primero obligatorios, luego opcionales y por último por defecto
// Si existen más de 3 parámetros usar objetos.
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const multiplyResult = multiply(3);
console.log({multiplyResult});

// Funciones con Objetos

interface Character {
    name: string;
    hp: number;

    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

strider.showHp();
healCharacter(strider, 10);
strider.showHp();

export {};