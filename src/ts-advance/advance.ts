// 高阶类型：为了灵活性而引入的一些特性
// 复杂多变的开发环境

interface DogInterface {
  run(): void;
}
interface CatInterface {
  jump(): void;
}
// 交叉类型 &，混入
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {},
};

// 联合类型 ｜ ：声明的类型可以为多个类型中的一个
// 不确定性，灵活性

let aaa: number | string = 1;
let bbb: "a" | "b" | "c"; // 字面量类型，类型和取值
let ccc: 1 | 2 | 3;

class Dog2 implements DogInterface {
  run() {}
  eat() {}
}
class Cat1 implements CatInterface {
  jump() {}
  eat() {}
}
enum Master {
  Boy,
  Girl,
}
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog2() : new Cat1();
  // 只能访问公共成员
  // pet.run()
  // pet.jump()
  pet.eat();
  return pet;
}

// 可区分的联合类型
// 联合类型 + 字面量类型
interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size; // 使用 return 就不用加 break 了
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
    default:
      // never
      // 上面的分支都不匹配
      return ((e: never) => {
        throw new Error(e);
      })(s);
  }
}
console.log(area({ kind: "circle", radius: 1 }));
