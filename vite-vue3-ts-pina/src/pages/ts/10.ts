import { num } from './08';
// 高级类型 二

// 1. 索引类型

// 从对象中抽取一些属性的值 然后拼接成数组，

// const userInfo = {
//     name: 'liu',
//     age: 10,
// };

// function getValue(userInfo: any, keys: string[]) {
//     return keys.map((key) => userInfo[key]);
// }

// console.log(getValue(userInfo, ['name', 'age'])); // ['liu',10]

// console.log(getValue(userInfo, ['sex', 'title'])); // [undefined，undefined]

// 此时 虽然 ts obj 中不包含sex title 属性 但是ts 并未报错
// 此时 使用ts 索引类型 对这种情况做类型约束 实现动态属性的检查
// 理解索引类型 需要先理解 keyof （索引查询） T[K] 索引访问 和 extends （泛型约束）

// keyof 索引查询
// keyof 操作符 可以用于获取某种类型的所有键 其返回类型是联合类型

interface IPerson {
    name: string;
    age: number;
}

type Test = keyof IPerson; // 'name' | 'age'

// 上面的例子 test 类型变成了一个字符串字面量

// T[K] 索引访问
// T[K] 表示接口T 的属性K 所代表的类型

interface Ip {
    name: string;
    age: number;
}

let type1: Ip['name']; // string
let tyep2: Ip['age']; // number

//  extends 泛型约束
// T extends U 表示 泛型变量可以通过继承某个类型 获得某些属性

interface ILength {
    length: number;
}

function printLength<T extends ILength>(arg: T): T {
    return arg;
}
// 这样的入参 一定要有length 属性 比如 str arr  obj 都可以 num 就不可以

const str = printLength('liu');
const arr = printLength([1, 2, 3]);
const obj = printLength({ length: 1 });
const num = printLength(1);

// 检查动态属性

// 对索引类型的几个概念了解后 对getValue 函数进行改造 实现对象上动态属性的检查
// 改造前
const userInfo = {
    name: 'liu',
    age: 10,
};

function getValue(userInfo: any, keys: string[]) {
    return keys.map((key) => userInfo[key]);
}

// 定义泛型 T K  用于约束userInfo 和 keys
// 为 K 增加一个泛型约束，是K 继承userInfo的所有属性的联合属性

function getValue1<T, K extends keyof T>(userInfo: T, keys: K[]): T[K][] {
    return keys.map((key) => userInfo[key]);
}
getValue1(userInfo, ['title', 'sex']);
