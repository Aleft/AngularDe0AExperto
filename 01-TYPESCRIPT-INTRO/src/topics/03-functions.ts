
function addNumbers (a: number, b: number) {//Si no aclaro el tipo de dato sera any 
    return a + b
    
}
//arrowfunction
const addNumbersArrow = (a: number, b: number):string => { //convertir a string
    return `${a + b}`; //indicamos que es un string con el `
} 

function multiply (firstNumber: number, secondNumber?: number, base = 2) {
    return firstNumber * base
}
    
// const result:number = addNumbers(1,2);
// const result2:string = addNumbersArrow(1,2);
// const multiplyResult:number = multiply(5);
// console.log(result, result2, multiplyResult);
// console.log(result2);

//Video Funciones con objetos como argumentos

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
    // skills: string[];
    // hometown?: string; //Poniendo el signo de pregunta despues de la variable me dice que la variable es opcional.
}
const healCharacter = (character: Character, amount: number) => {
    
    character.hp += amount; 
} 

const strider: Character = {
    name: 'strider',
    hp: 50,
    showHp() {
        console.log(`HP: ${this.hp}`);
    }
    // skills: ['Bash', 'Counter', 'Healing']
    // hometown: 'New York'
}
healCharacter(strider, 10);
strider.showHp();

export {};