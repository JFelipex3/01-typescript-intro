interface Product {
    description: string;
    price: number;
};

const phone: Product =  {
    description: 'Nokia A1',
    price: 150.0
};

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
};

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// Retorno de dos valores [number total, number totalTax]
//function taxCalculation(options: TaxCalculationOptions): [number, number] {

//     let total = 0;

     // Desestructurar product, obteniendo el price del producto 
//     options.products.forEach(({price}) => {
//         total += price;
//     });

//     return [total, total * options.tax];
// }

// Desestructurar se ahorra colocar options, esto no es el más efectivo ya que si se tienen 20 productos se realizan 20 desestructuraciones al llamr la función
// function taxCalculation({tax, products}: TaxCalculationOptions): [number, number] {

//     let total = 0;

     // Desestructurar product, obteniendo el price del producto 
//     products.forEach(({price}) => {
//         total += price;
//     });

//     return [total, total * tax];
// }

function taxCalculation(options: TaxCalculationOptions): [number, number] {
    
    const {tax, products} = options;
    let total = 0;

    // Desestructurar product, obteniendo el price del producto 
    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

console.log('Total', total);
console.log('Tax', totalTax);

export {};