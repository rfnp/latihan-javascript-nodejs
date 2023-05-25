console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");

// const coffeeStock = require('./state')
// const {coffeeStock, isCoffeeMachineReady} = require('./state');

// import coffeeStock from "./state.js";
import { coffeeStock, isCoffeeMachineReady } from "./state.js";

// console.log(coffeeStock)
// console.log(isCoffeeMachineReady)

console.log("Selamat datang!");
setTimeout(() => {
    console.log("Terimakasih sudah mampir, silakan datang kembali.");
}, 3000)

console.log("Ada yang bisa dibantu?");

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(coffeeStock);

makeCoffee("robusta", 80)