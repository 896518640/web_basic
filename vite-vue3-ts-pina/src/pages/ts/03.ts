// interface
// 1. 基本概念
// interface 是ts设计出来 用于定义对象类型的 可以对对象的形状进行描述
// 定义 interface 一般是首字母大写

export interface Person {
    name: string;
    age: number;
}

export const p1: Person = {
    name: 'sad',
    age: 0,
};

// 属性 必须和 定义的时候完全一致！！
// 少写 报错
// 多写 报错

// 注意 interface 不是js关键字 所以ts编译成js之后 这些interface 是不会被转换过去的 都会被删掉 interface 只是在ts中用来作类型检查的

// 2. 可选属性
// 跟函数的可选参数是类似的 在属性上加个？ 这个属性就是可选的

// 3. 只读属性
// 如果希望某个属性不被改变 可以这么写
interface ReaddOnly {
    readonly id: number;
    name: string;
    age: number;
}

// 改变这个只读属性时会报错

// 4. interface 描述函数类型
interface Isum {
    (x: number, y: number): number;
}

const add11: Isum = (num1, num2) => {
    return num1 + num2;
};

// 5. 自定义属性（可索引的类型）
// 在上述案例中 属性必须和类型定义的时候完全一致  如果一个对象上有多个不确定的属性 怎么办？

interface RandomKey {
    [name: string]: string;
}

const obj: RandomKey = {
    a: 'aaa',
};

// 类数组 数组上的方法 是没有的
interface likeArr {
    [name: number]: string;
}

const add: likeArr = ['hello'];

// 6. duck typing 鸭子类型
// 用interface 可以创建一系列自定义的类型 事实上 interface 还有一个响亮的名称 duck typing
// 只要满足了interface 定义的类型 ts就可以编译通过

interface FunctionWithProps {
    (x: number): number;
    fnName: string;
}

const fn1: FunctionWithProps = (x) => {
    return x;
};

fn1.fnName = 'hello world';
