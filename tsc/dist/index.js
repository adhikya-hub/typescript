"use strict";
// let age: number = 20;
// if (age < 50) {
//   age += 10;
// }
// console.log(age);
Object.defineProperty(exports, "__esModule", { value: true });
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
//optional property access
console.log(customer?.birthday);
//# sourceMappingURL=index.js.map