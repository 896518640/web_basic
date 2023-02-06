// 映射类型
// ts 允许讲一个类型映射成另外一个类型

// in 操作符
// 用来对联合类型实现遍历

type Person = 'name' | 'major' | 'school';

type Obj = {
    [p in Person]: string;
};

// Partial
// partial<T> 将T 的所有属性映射为可选的 例如
interface IPerson {
    name: string;
    age: number;
}
const p1: IPerson = {
    name: 'liu',
    age: 18,
};
// 使用了 IPerson 接口 就一定要传 name  和 age 属性

let p1: IPerson = {};

interface IPerson1 {
    name: string;
    age: number;
}

// type IPartial = Partial<IPerson>;

// const p2: IPartial = {};

// Partial 原理
// Partial 的实现用到了 in 和 keyof

type Partial<T> = {
    [P in keyof T]?: T[P];
};

// [P in keyof T] 遍历T 上的所有属性
// ?: 设置属性为可选的
// T[P] 设置类型为原来的类型

// Readonly
// Readonly<T> 将 T 的所有属性映射为只读的

interface Ip {
    name: string;
    age: number;
}

type IReadOnly = Readonly<Ip>;

const p3: IReadOnly = {
    name: 'liu',
    age: 18,
};

p3.age = 10;

// readonly 原理
type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};

// [P in keyof T] 遍历T上的所有属性
// readonly 设置属性为只读的
// T[P] 设置类型为原来的类型
