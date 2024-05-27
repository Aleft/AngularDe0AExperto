//Objetos, arreglos e interfaces
const skills: string [] = ['Bash', 'Counter', 'Healing'];

interface Character{ //una interface es una definicion de una clase.
    name: string;
    hp: string;
    skills: string[];
    hometown?: string; //Poniendo el signo de pregunta despues de la variable me dice que la variable es opcional.
}
const strider: Character = {
    name: 'strider',
    hp: '100',
    skills: ['Bash', 'Counter', 'Healing']
    // hometown: 'New York'
}
strider.hometown = 'New Yok';

// console.log(strider);
console.table(strider); //Variacion para imprimir en la consola la informacion de la variable.
export {}; 
//Siguiente vid 3-06 funciones basicas