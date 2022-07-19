class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {}
  private pri() {} // 只能在类中访问
  protected pro() {} // 只能在类或者子类种调用，不能被实例调用
  readonly legs: number = 4; // 只读属性必须被初始化
  static food: string = "bones"; // 只能通过类名调用
}
console.log(Dog.prototype); // {run: ƒ, constructor: ƒ} name属性只在实例上，不再原型上

let dog = new Dog("wangwang");
// dog.pri() 属性“pri”为私有属性，只能在类“Dog”中访问
console.log(dog);

// 继承
class Husky extends Dog {
  //   color: string;
  // 构造函数参数可以添加修饰符，自动变成实例的属性，省略在类中的定义，public color
  constructor(name: string, public color: string) {
    super(name); // 派生类的构造函数必须包含 "super" 调用
    this.color = color;
  }
}
