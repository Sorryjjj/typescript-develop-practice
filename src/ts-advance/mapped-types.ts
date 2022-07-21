// ts 的映射类型
// 从旧类型生成新类型
//
interface Obj33 {
  a: string;
  b: number;
}

// 同态：不引入新的属性
type ReadonlyObj = Readonly<Obj33>; // 成员的属性变成只读
type PartialObj = Partial<Obj33>; // 变成可选属性
type PickObj = Pick<Obj33, "a" | "b">; // 抽取属性

// 创建新的属性
// "x" | "y" 预定义的新的属性
// Obj33 已知的类型
//
type RecordObj = Record<"x" | "y", Obj33>;
