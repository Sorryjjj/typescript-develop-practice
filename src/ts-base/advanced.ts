let a = 1; // number
let b = [1, null]; // 关闭strictNullChecks时，推断为number[]

let c = (x = 1) => x + 1; // x: number, c+ number

window.onkeydown = (event) => {
  // event: KeyboardEvent
  console.log(event);
};

// 类型断言
interface Foo {
  bar: number;
}
let foo = {} as Foo;
foo.bar = 1;

// 类型兼容性
let s: string = "a";
a = null;

// 接口兼容性
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
}

let x1: X = { a: 1, b: 2 };
let y1: Y = { a: 1, b: 2, c: 1 };

x1 = y1;
// y1 = x1; 无法赋值

// 函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}

// 需要同时满足三个条件：参数个数、参数类型、返回值类型

// 1 参数个数
let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2) 错误

// 可选参数和剩余参数
let a1 = (p1: number, p2: number) => {};
let b1 = (p1?: number, p2?: number) => {};
let c1 = (...agrs: number[]) => {};

// 固定参数兼容可选参数和剩余参数
a1 = b1;
a1 = c1;

// 可选参数 不兼容固定参数和剩余参数???
b1 = c1;
b1 = a1;

//剩余参数 ，可以兼容固定参数和可选参数
c1 = a1;
c1 = b1;

// 2 参数类型
let handler3 = (a: string) => {};
// hof(handler3)

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Point2D {
  x: number;
  y: number;
}

let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d;
// p2d = p3d // 不兼容，类似于参数多的兼容参数少的，关闭strictFunctionTypes可以兼容

// 3 返回值类型
let f1 = () => () => ({ name: "Alice" });
let f2 = () => () => ({ name: "Alice", location: "Beijing" });
f1 = f2;
// f2 = f1 // 不兼容

// 函数重载，重载列表与函数实现
// 运行时编译器会查找重载列表，使用第一个匹配的定义来执行函数
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}
// function overload(a: any, b: any, c: any): any {} // 不兼容

// 枚举兼容性
enum Fruit {
  Apple,
  Banana,
}
enum Color {
  Red,
  Yellow,
}

let fruit: Fruit.Apple = 3;
let no: number = Fruit.Apple;
// let color: Color.Red = Fruit.Apple //枚举之间不兼容

// 类兼容性
class A {
  constructor(p: number, q: number) {}
  id: number = 1;
  //   private name: string = ''
}
class B {
  static s = 1;
  constructor(p: number) {}
  id: number = 2;
  //   private name: string = ''
}

let aa = new A(1, 2);
let bb = new B(1);
// 两个实例互相兼容，静态成员不做比较
aa = bb;
bb = aa;
// 若A中有私有成员,则不兼容
// 而父类与子类是兼容的
class C1 extends A {}
let cc = new C1(1, 2);
aa = cc;
cc = aa;

// 泛型兼容性
interface Empty<T> {
  // value: T
}
let obj1: Empty<number> = {};
let obj2: Empty<string> = {};
// obj1 = obj2; // 泛型接口中没有成员时兼容

// 两个泛型函数定义相同，但是没有指定类型参数，则兼容
let log4 = <T>(x: T): T => {
  console.log("x");
  return x;
};
let log5 = <U>(y: U): U => {
  console.log("y");
  return y;
};

log4 = log5; // 兼容
