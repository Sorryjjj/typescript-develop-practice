abstract class Animal {
  eat() {
    console.log("eat");
  }
  // 抽象方法
  abstract sleep(): void;
}
// let animal = new Animal() 无法创建抽象类的实例
class Dog1 extends Animal {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  run() {}
  sleep(): void {
    console.log("dog sleep");
  }
}

let dog1 = new Dog1("wangwang");
dog1.eat();

// 多态
class Cat extends Animal {
  sleep(): void {
    console.log("Cat sleep");
  }
}

let cat = new Cat();

let animals: Animal[] = [dog1, cat];
animals.forEach((item) => {
  item.sleep();
});

// 链式调用
class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}
let workflow = new WorkFlow();
workflow.step1().step2();

// 子类的链式调用
class MyFlow extends WorkFlow {
  next() {
    return this;
  }
}
let myflow = new MyFlow();
myflow.next().step1().step2();
