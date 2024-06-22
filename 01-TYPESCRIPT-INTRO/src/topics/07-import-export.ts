import { Product, taxCalculator } from './06-function-destructuring'
// import {taxCalculator} from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 150.0
    },
    {
        description: 'iPad Air',
        price: 350.50
    }
];
// const tax = 0.15;
const [total, tax] = taxCalculator({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total:', total);
console.log('Tax:', tax);