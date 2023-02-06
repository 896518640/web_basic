// 函数类型 需要定义输入参数类型和输出参数类型
// 输出类型也可以忽略 因为ts能够根据返回语句自动推断出返回值类型

export function add(a: number, b: number): number {
    return a + b;
}

export function voidFn(): void {
    console.log('hello world');
}

// 1. 函数表达式写法
let add2 = (x: number, y: number): number => {
    return x + y;
};

// 2. 可选参数
// 参数后面加一个 ？ 代表这个参数是可选地
// 注意 可选参数 必须放在函数入参的最后面 不然会导致编译错误

// 3. 默认参数
// 跟js的写法一样 在入参里定义初始值 和可选参数不同的是 默认参数不应放在函数入参的最后面

// 4. 函数赋值
// js 中变量随便赋值没问题 但是在ts中 函数不能随便赋值，会报错
let add3 = (x: number, y: number): number => {
    return x * y;
};

add3 = '123';

add2 = add3;

// 5. 函数重载
// 函数重载 是指两个函数名称相同 但是参数个数或参数类型不同 他的好处显而易见 不需要把 相似功能的函数差分成多个函数名称不同的函数
// 5.1 不同参数类型

function spliting(x: number[]): number;
function spliting(x: string[]): string;
function spliting(x: any[]): any {
    if (typeof x[0] === 'string') {
        return x.join();
    }
    if (typeof x[0] === 'number') {
        return x.reduce((acc, cur) => acc + cur);
    }
}

// 5.2 不同参数个数

function concat(x: number[]): number;
function concat(x: string[]): string;
function concat(x: number[], y: number[]): number;
function concat(x: string[], y: string[]): string;
function concat(x: any[], y?: any[]): any {
    if (Array.isArray(y) && typeof y[0] === 'number') {
        return (
            x.reduce((acc, cur) => acc + cur) +
            y.reduce((acc, cur) => acc + cur)
        );
    }
    if (Array.isArray(y) && typeof y[0] === 'string') {
        return x.join() + ',' + y.join();
    }
    if (typeof x[0] === 'number') {
        return x.reduce((acc, cur) => acc + cur);
    }
    if (typeof x[0] === 'string') {
        return x.join();
    }
}
