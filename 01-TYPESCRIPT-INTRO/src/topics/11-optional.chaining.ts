export interface Passanger {
    name: string;
    children?: string[];
}

const passanger1: Passanger = {
    name: 'Alex',
    children: ['Luis', 'Andres']
}

const passanger2: Passanger = {
    name: 'Martin'
}

const returnChildNumber = (passenger: Passanger): number => {
    const howManyChildren = passenger.children?.length || 0; //Forma practica para evitar el if 
    console.log(`The passenger ${passenger.name} has ${howManyChildren} children.`);
    // console.log(passenger.name, howManyChildren)
    return howManyChildren;
}

returnChildNumber(passanger1);