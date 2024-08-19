let age: number | boolean = 5;
console.log(age);
const sum = (x: number, y: number): string => (x + y).toString();
type pessoa = {
  ncc: number;
  name?: string; //opcional
};
const user: pessoa = {
  ncc: 1,
  name: "Carlos",
};
const user2: pessoa = {
  ncc: 1,
};
console.log(user.name);
console.log(user2.name);
console.log(user2.name!);
interface CalcOp {
  (x: number, y: number): number;
}
const add: CalcOp = (x: number, y: number) => x + y;
const sub: CalcOp = (x: number, y: number) => x - y;
const div: CalcOp = (x: number, y: number) => x / y;
const mult: CalcOp = (x: number, y: number) => x * y;
