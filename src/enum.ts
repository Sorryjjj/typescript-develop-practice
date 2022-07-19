// 数组枚举
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest,
}
console.log(Role[1]);
console.log(Role.Developer);

// 生成的代码中，枚举类型被编译成一个对象，它包含了正向映射（ name -> value）和反向映射（ value -> name）。
// 引用枚举成员总会生成为对属性访问并且永远也不会内联代码。
// 要注意的是 不会为字符串枚举成员生成反向映

// var Role;
// (function (Role) {
//     Role[Role["Reporter"] = 0] = "Reporter";
//     Role[Role["Developer"] = 1] = "Developer";
//     Role[Role["Maintainer"] = 2] = "Maintainer";
//     Role[Role["Owner"] = 3] = "Owner";
//     Role[Role["Guest"] = 4] = "Guest";
// })(Role || (Role = {}));

// 字符串枚举
enum Message {
  Success = "成功",
  Fail = "失败",
}

// var Message;
// (function (Message) {
//     Message["Success"] = "\u6210\u529F";
//     Message["Fail"] = "\u5931\u8D25";
// })(Message || (Message = {}));

// 异构枚举
enum Answer {
  N,
  Y = "Yes",
}

// 枚举成员
enum Char {
  // const，在编译时计算出结果，以常量形式出现在运行环境
  a,
  b = Char.a,
  c = 1 + 2,
  //   computed，非常量表达式，保留到程序执行阶段
  d = Math.random(),
  e = "123".length,
}
// "use strict";
// var Char;
// (function (Char) {
//     Char[Char["a"] = 0] = "a";
//     Char[Char["b"] = 0] = "b";
//     Char[Char["c"] = 3] = "c";
//     Char[Char["d"] = Math.random()] = "d";
//     Char[Char["e"] = "123".length] = "e";
// })(Char || (Char = {}));

// 常量枚举: 当访问枚举值时，为了避免生成多余的代码和间接引用，可以使用常数枚举。
const enum Month {
  Jan,
  Feb,
  Mar,
}
let month = [Month.Jan, Month.Feb, Month.Mar];

// "use strict";
// let month = [0 /* Month.Jan */, 1 /* Month.Feb */, 2 /* Month.Mar */];

// 枚举类型
enum E {
  a,
  b,
}
enum F {
  a = 0,
  b = 1,
}
enum G {
  a = "apple",
  b = "banana",
}

// 把任意number类型赋值给枚举类型，取值也可以超出枚举成员的定义
let e: E = 3;
let f: F = 3;
// 两种不同类型的枚举无法比较
// console.log(e === f); // 此条件将始终返回 "false"，因为类型 "E" 和 "F" 没有重叠

// 两种不同类型的枚举无法比较
let e1: E.a = 2;
let e2: E.b;
// console.log(e1 === e2); 无法比较

let e3: E.a = 1;
// console.log(e1 === e3);

// 取值只能是枚举成员的类型
let g1: G = G.a;
let g2: G.a = G.a;
