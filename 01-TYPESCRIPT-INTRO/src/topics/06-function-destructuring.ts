export interface Product {
    description: string;
    price: number;
}

// const phone: Product = {
//     description: 'Nokia A1',
//     price: 150.0
// }

// const tablet: Product = {
//     description: 'iPad Air',
//     price: 350.50
// }

interface TaxCalculatorOptions {
    tax: number;
    products: Product[]
}

// const shoppingCart = [phone, tablet];
// const tax = 0.15;


// function taxCalculator (options: TaxCalculatorOptions): number[] {
export function taxCalculator (options: TaxCalculatorOptions): number[] {
    const {tax, products} = options;
    
    let total = 0;
    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax];
}

// const result = taxCalculator({
//     products: shoppingCart,
//     tax: tax,
// });

//Aplicando desestructuracion
// const [total, taxTotal] = taxCalculator({
//     products: shoppingCart,
//     tax: tax
// })

// console.log('Total:', total);
// console.log('Tax:', taxTotal);

// export{};