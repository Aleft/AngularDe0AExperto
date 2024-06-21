/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string;
    age: number;
    address: address;
    showAddress: () => string
}

interface address {
    street: string;
    country: string;
    city: string;
}

const superHeroe: SuperHero = {
    name: 'superman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};