// 不清楚用什么类型，可以使用 any 类型。这些值可能来自于动态的内容，比如来自用户输入或第三方代码库
// 不建议使用any  丧失了ts的意义
export function divide(param: any) {
    return param / 2;
}

//可以使用 unknown 类型
//unknown 类型代表任何类型，它的定义和 any 定义很像，但是它是一个安全类型，使用 unknown 做任何事情都是不合法的。
export function divide2(param: unknown) {
    return (param as number) / 2; // 配合类型断言 可以解决这个问题
}

// void 类型与 any 类型相反 它表示没有任何类型。
// 比如函数没有明确返回值 ， 默认返回void 类型
export function welcome(): void {
    console.log('hello');
}

// never 类型 表示的是哪些永远不存在的的值得类型。
// 有些情况下只会用不存在， 比如
// 1. 如果一个函数执行时抛出了异常 那么这个函数永远不存在返回值 因为抛出异常会直接终端程序运行
// 2. 函数中执行无线循环的代码 使得程序永远无法运行到函数返回值的那一步
// never 是任何类型的子类型 也可以赋值给任何类型
// 没有类型是never 的子类型 没有类型可以赋值给never 类型 除了never本身之外 及时any也不可以赋值给never
export function fn(msg: string): never {
    throw new Error(msg);
}

// 死循环 千万别这么写 会内存溢出
export function fn2(): never {
    while (true) {}
}

// 数组类型 type[]
const list: number[] = [1, 2, 3];
// 数组类型中的 项 写错会报错
// 调用数组中的方法 类型对不上会报错

// 问题 ： 如果我们的数组想要每一项放入不同的数据怎么办？
// 元组

// 元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
const tuple: [number, string] = [18, 'sa'];
// 元组 写错类型会报错
// 元祖 越界会报错
// 元祖 调用数组的方法 比如push 是 不会有越界错误
// 元祖 push 一个没有定义的类型会报错
