function log<T>(value: T): T {
  console.log(value);
  return value;
}

log<string[]>(["a", "b"]);
log(["a", "b"]);

// 泛型函数类型
type Log = <T>(value: T) => T;
// 泛型函数实现
let myLog: Log = log;

// 接口定义泛型函数
interface Log1<T = string> {
  (value: T): T;
}
// 泛型约束了整个接口时，实现必须指定类型
let myLog1: Log1<number> = log;
myLog1(1);
// myLog1('a'); 必须为number
