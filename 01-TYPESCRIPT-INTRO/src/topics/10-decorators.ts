function classDecorator<T extends {new (...args: any[]): {}}>(
    constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

@classDecorator
export class superClass {
    public myProperty:string = "property";

    print() {    
        console.log('Hello');
    }
}

// console.log(superClass); //Si hago esto mi decorator reemplaza a la superclass
//Sin embargo puedn crear una constante para que almacene la superClass y de esta forma el output
//Me va a mostrar la propiedad original y las 2 nuevas. Tambien poria haber hecho instance.myProperty
//es decir, puedo ver 1x1
const instance = new superClass();
console.log(instance); // property