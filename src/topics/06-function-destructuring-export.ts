export interface Product {
    description: string;
    price: number;
};

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    
    const {tax, products} = options;
    let total = 0;

    // Desestructurar product, obteniendo el price del producto 
    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax];
}