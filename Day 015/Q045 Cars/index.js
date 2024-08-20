"use strict";
function carInfo(manufacture, model, ...optional) {
    let car = Object.assign({ manufacture,
        model }, Object.assign({}, ...optional));
    return car;
}
console.log(carInfo("Audi", "e-tron GT", { Color: "Tango Red metallic" }, { Year: 2024 }, { Price: " $ 147,100" }));
console.log(carInfo("Honda", "Civic", { Color: "Jet Black" }, { Year: 2024 }, { Price: "$ 36,500" }));
