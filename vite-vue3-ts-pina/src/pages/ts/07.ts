// 类型推论
// ts 里 在有些没有明确指出类型的地方 类型推论 会帮助提供类型
// 这种推论发生在初始化变量和成员 设置默认参数值 和 决定函数返回值时

// 1. 定义时不赋值

export let a;

a = 18;

a = 'lin';

// 定义时不赋值 ts 会将其推导成 any  变量“a”隐式具有“any”类型。

// 2. 初始化变量

let userName = 'lin';

userName = 9;

// 初始的时候赋值 是 字符串类型 所以 ts 自动推导 userName  为 字符串 string 类型
// 这个时候 在更改 userName 就必须是 string  其他类型 就会报错
