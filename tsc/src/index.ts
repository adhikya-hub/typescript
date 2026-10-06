// let age: number = 20;
// if (age < 50) {
//   age += 10;
// }
// console.log(age);

// let sales: number = 123_456_789;
// let course: string = "TypeScript";
// let is_published: boolean = true;

// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;

// let level; //any

// level = 1;
// level = "a";

// function render(doc) {
//   console.log(doc);
// }

// let numbers: number[]=[1,2,3]
// let nums: number[]=[]

// numbers.forEach(n=>n.toString)

//let user: [number, string] = [1, "Dan"];

// user[1].charAt

// user.push(1)

// const small=1;
// const medium=2;
// const large=3;

// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

// function calc(income: number, year: number): number {
//   if (income < 200 && year < 2022) {
//     return 1;
//   }
//   return 0;
// }
// calc(100, 2022);

// type Employee = {
//   readonly id: number;
//   name?: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "Dan",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

//employee.id=0

// function kgToLbs(weight: number | string): number {
//   //narrowing
//   if (typeof weight === "number") {
//     return weight * 2;
//   } else {
//     return parseInt(weight) * 2;
//   }
// }
// kgToLbs(3);

// type Draggable = {
//   drag: () => void;
// };
// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// console.log(textBox);

//Literal
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// console.log(quantity);

//nullable
// function greet(name: string|null|undefined){
//     if (name)
//     console.log(name.toUpperCase())
// else console.log("hi")
// }
// greet(undefined)

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

//optional property access

console.log(customer?.birthday);
