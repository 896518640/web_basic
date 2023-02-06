// 泛型
// 泛型 是ts比较难理解的部分

// 1. 为什么需要泛型？
// 看例子 顶一个print函数 这个函数功能是把传入的参数打印出来 再返回这个参数 传入的参数类型是string 函数的返回类型为string

export function print(arg: string): string {
    console.log(print);
    return arg;
}

// 需求变了 需要打印number 类型 使用联合类型进行改造
function print1(arg: number | string): string | number {
    console.log(arg);
    return arg;
}

// 需求又变了 我们需要打印string 数组 number 数组 甚至任何类型
// 笨方法 支持多少类型就写多少类型
// 或者把参数类型改为any

// 这个时候很容易出现问题

// 2. 泛型的基本使用
function print2<T>(arg: T) {
    console.log(arg);
    return arg;
}

// 这样我们就做到了 输入和输出的类型的统一 并且可以输入输出任何类型

const res: string = print2('string');
// 泛型中的T 就像一个占位符 或者说一个变量 在使用的时候可以把定义的类型 箱参数一样传入 它就可以原封不动的输出

type Print = <T>(arg: T) => T;
const printFn: Print = function print3(arg) {
    console.log(arg);
    return arg;
};

interface IPrint<T> {
    (arg: T): T;
}

function print4<T>(arg: T) {
    console.log(arg);
    return arg;
}

const printFn2: IPrint<number> = print4;
const printFn3: IPrint<number> = function print5<T>(arg: T) {
    return arg;
};

// 3. 约束泛型
// 加上现在有这么一个函数 打印传入参数的长度
// function printLength<T>(arg: T): T {
// console.log(arg.length);
//     return arg;
// }

// ts会报错 那么我想约束这个泛型 一定要有length 属性 怎么办
// 可以和 interface 结合 来约束类型

interface ILength {
    length: number;
}

function printLength<T extends ILength>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// 我们定义的变量一定要有length 属性 比如下面的str arr 和 obj 才可以通过ts编译
printLength('123');
printLength([1, 2, 3]);
printLength({ length: 10 });

// 这个例子 再次印证 interface 的 duck typing
// 只要你有 length 属性 都符合约束 那就不管你是 str arr  obj

// 4. 泛型的一些应用
// 使用泛型、 可以在定义函数 接口 或类的时候 不予现指定具体类型 而是在使用的时候在指定类型

// 4.1 泛型约束类

// 定义一个栈 有入栈和出栈 两个方法 如果想入栈 和出栈的元素类型统一 就可以这么写
class Stack<T> {
    private data: T[] = [];
    push(item: T) {
        return this.data.push(item);
    }
    pop(): T | undefined {
        return this.data.pop();
    }
}
// 在定义市里的时候 写类型 比如 入栈和出栈都要是number类型 就这么写

const s1 = new Stack<number>();
s1.push('dong'); //类型“string”的参数不能赋给类型“number”的参数。
s1.pop();

// 这是非常灵活的  如果需求变了 入栈和出栈都要是string 类型 在定义实例的时候改一下就好了：

const s2 = new Stack<string>();
s2.push('asd');
s2.pop();

// 需要注意的是 泛型无法约束类的静态成员

// 泛型约束接口
// 使用泛型 也可以对interface  进行改造 让interface更灵活

interface IKeyValue<T, U> {
    key: T;
    value: U;
}

const k1: IKeyValue<number, string> = { key: 1, value: '1' };
const k2: IKeyValue<string, number> = { key: 'a', value: 1 };

// 泛型定义数组
// 定义一个数组
const arr1: number[] = [1, 2, 3];
// 现在也可以这么写

const arr2: Array<number> = [2, 3, 4];

// 总结
// 1. 泛型 从字面上理解 泛型就是一般的 广泛的
// 2. 泛型是指在定义函数、接口 或 类的时候 不预先指定具体类型 而是在使用的时候在指定类型
// 3. 泛型中的T 就像一个占位符、或者说一个变量，在使用的时候可以把定义的类型 像参数一样传入 他可以原封不动的输出
// 3. 泛型在成员之间提供有意义的约束 这些成员可以是 ： 函数参数 、函数返回值、累的实例成员、类的方法等

// 泛型的好处
// 1. 函数和类可以轻松地支持多种类型 增强程序的拓展性
// 2. 不必写冗长的联合类型 增强代码的可读性
// 3. 灵活控制类型之间的约束
