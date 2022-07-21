// 条件类型
// 由条件表达式决定的类型
//
// T extends U ? X : Y

// T extends string 泛型 T 约束
//
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";
type T1 = TypeName<string>;
type T2 = TypeName<string[]>;

// 分布式的条件类型
// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>;

// 类型的过滤
// T extends U 的含义，T可以被赋值给U
//
type Diff<T, U> = T extends U ? never : T;
// 过滤掉第2个类型中含有的a
type T4 = Diff<"a" | "b" | "c", "a" | "e">;
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// never | "b" | "c"
// "b" | "c"

// 从类型中过滤掉 null 和 undefined
type NotNull<T> = Diff<T, null | undefined>;
type T5 = NotNull<string | number | undefined | null>;

// 官方内置的条件类型
// Exclude<T, U>
// NonNullable<T>

// Extract<T, U>
type T6 = Extract<"a" | "b" | "c", "a" | "e">;

/**
 * Obtain the return type of a function type
 */
// ReturnType<T>
type T8 = ReturnType<() => string>;

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
// infer 表示代推断或者延迟推断

// 类型
// 理论走向实践，直面开发中的具体问题
