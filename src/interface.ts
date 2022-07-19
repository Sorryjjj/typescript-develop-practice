interface List {
  readonly id: number; // 只读属性，不允许修改
  name: string;
  age?: number; // 可选属性
}

interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach((value) => console.log(value.id, value.name));
}

let result = {
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B" },
  ],
};

// 传入对象满足约束条件即可，即使多了sex属性
render(result);
// 若传入对象字面量的话,ts就会对额外的字段进行检查
// 不能将类型“{ id: number; name: string; sex: string; }”分配给类型“List”。
//   对象文字可以只指定已知属性，并且“sex”不在类型“List”中
// render({
//   data: [
//     { id: 1, name: "A", sex: "male" },
//     { id: 2, name: "B" },
//   ],
// });

// 解决方法： 类型断言 或者 字符串索引签名
// 类型断言
render({
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B" },
  ],
} as Result);

render(<Result>{
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B" },
  ],
});

// 字符串索引签名
// interface List {
//   id: number;
//   name: string;
//   [x: string]: any;
// }

// 数字索引接口
interface StringArray {
  [index: number]: string;
}
let chars: StringArray = ["A", "B"];

// 字符串索引接口
interface Names {
  [x: string]: string;
  //   y: number // 不允许
  //   [z: number]: number; // 不允许
  [z: number]: string;
}

// 函数接口
// interface Add {
//   (x: number, y: number): number;
// }

// 类型别名
type Add = (x: number, y: number) => number;

let add1: Add = (a, b) => a + b;

// 混合类型: 一个对象可以同时做为函数和对象使用，并带有额外的属性
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = "1.0";
  lib.doSomething = () => {};
  return lib;
}

// 函数重载
function add3(...rest: number[]): number;
function add3(...rest: string[]): string;
function add3(...rest: any[]): any {
  let first = rest[0];
  if (typeof first === "string") {
    return rest.join();
  }
  if (typeof first === "number") {
    return rest.reduce((pre, cur) => pre + cur);
  }
}
console.log(add3(1, 2, 3));
console.log(add3("a", "b", "c"));
