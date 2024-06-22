
//si solo hubiesemos puesto (argument) se interpretaria como que es de tipo ANY
//Al suceder esto se puede interpretar por obviedad que sera de cualquier tipo, para manejar esto
//Existen los generics, aunque se puede usar cualquiier letra generalmente se usa primero <T>
//Al crear una const o let luego de hacer uso de la function le aclaramos el tipo de dato
//en el <> reemplazando la T por el tipo que queramos
export function whatsMyType<T>(argument: T): T  {
    
    return argument;

}

let amIString = whatsMyType<string>('hola mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIArray.join(' - '));
console.log(amINumber.toFixed());
console.log(amIString.split(' '));