interface Human {
  //   new (name: string): void; 会提示错误实现了接口
  name: string;
  eat(): void;
}

// 类实现接口，必须实现接口的所有属性
// 接口只能约束类的公有成员，不能约束构造函数
class Asian implements Human {
  name: string;
  //   private name: string; 不可以

  constructor(name: string) {
    this.name = name;
  }
  eat() {}
  sleep() {}
}

// 接口继承
interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

interface Boy extends Man, Child {}

// 需要实现Human Man Child的全部属性: run, name, eat, cry
let boy: Boy = {
  name: "",
  run() {},
  eat() {},
  cry() {},
};

// 接口继承类
class Auto {
  state = 1;
  //   private state2 = 0;
}

interface AutoInterface extends Auto {
  // 已经包含了state属性
}

class C implements AutoInterface {
  state = 2;
}
class Bus extends Auto implements AutoInterface {
  // 不必实现state，已经继承了state
}

// 接口之间可以相互继承
// 类之间可以继承
// 接口可以通过类实现，接口只能约束类的公有成员
// 接口可以抽离出类的成员（public,private,protected）
