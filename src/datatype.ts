// 原始类型
let bool: boolean = true;
let num: number = 123;
let str: string = "abc";

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// 元组: 用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
let tuple: [number, string] = [0, "1"];
// 允许push，但是不允许访问
// tuple.push(2)
// tuple[2]

// 函数
let add = (x: number, y: number): number => x + y;

// 对象
let obj: { x: number; y: number } = { x: 1, y: 2 };

// symbol: 新的原始数据类型 Symbol ，表示独一无二的值
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2); // false

// undefined null
let un: undefined = undefined;
let nu: null = null;

// void
let noReturn = () => {};

// any
let x;
x = 1;
x = [];
x = () => {};

// never
// 一个总是会抛出错误的函数
let error = () => {
  throw new Error("error");
};
// 一个从来不会有返回值的函数
let endless = () => {
  while (true) {}
};
