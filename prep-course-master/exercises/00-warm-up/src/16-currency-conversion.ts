export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 * Find a way to add 1% to all currency conversions (think about the DRY (don't repeat yourself) principle)
 */

 const FEE = 1.01
 const USD_RATE = 1.4
 const BRL_RATE = 6.9
// // You are allowed to change this function
// function convertToUSD(price: number) {
//     return ((price * 1.4) * FEE).toFixed(2)
// }
// // You are allowed to change this function
// function convertToBRL(price: number) {
//     return ((price * 6.9) * FEE).toFixed(2)
// }

function convert(price: number, rate: number){
    return ((price * rate) * FEE).toFixed(2)
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convert(price, USD_RATE);
const priceInBRL = convert(price, BRL_RATE);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/