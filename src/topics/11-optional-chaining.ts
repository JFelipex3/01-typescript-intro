
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Jordan'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

const printChildren = ({name, children}: Passenger) => {
    const howManyChildren = children?.length ?? 0;

    console.log(name, 'tiene', howManyChildren, 'hijos');
}

printChildren(passenger1);
printChildren(passenger2);