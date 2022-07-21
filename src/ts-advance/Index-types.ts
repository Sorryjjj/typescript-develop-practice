// ts 中的索引类型
let obj12 = {
  a: 1,
  b: 2,
  c: 3,
};

// 如果keys是不存在的属性，也不会报错
// function getValues(obj: any, keys: string[]) {
//     return keys.map(key => obj[key])
// }

// 索引查询操作符
// keyof T ，表示类型T的所有公共属性字面量的联合类型
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((key) => obj[key]);
}
console.log(getValues(obj12, ["a", "b"]));
// console.log(getValues(obj, ['d', 'e']))

interface Obj {
  a: number;
  b: string;
}

// 查询操作符
// keyof T
let key: keyof Obj;
// let key: "a" | "b";

// 索引访问操作符
// T[K]
let value: Obj["a"];

// 泛型约束
// T extends U
