class Log2<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

// 指定类型参数时，参数必须符合类型
let log1 = new Log2<number>();
log1.run(1);

// 当不指定类型参数时，可以传任意类型
let log2 = new Log2();
log2.run("a");

// 泛型约束
interface Length {
  length: number;
}
function log3<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}

log3([]);
log3("111");
log3({ length: 1 });
