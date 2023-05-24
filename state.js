const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

const isCoffeeMachineReady = true;

// module.exports = {coffeeStock, isCoffeeMachineReady};
// module.exports = coffeeStock; 

// export default coffeeStock;
export { coffeeStock, isCoffeeMachineReady };

// console.log(module) // penyebab error export default