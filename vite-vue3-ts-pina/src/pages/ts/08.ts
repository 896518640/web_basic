import { StdioNull } from 'child_process';
import { num } from './08';
// 高级类型

// 1. 联合类型 |
// 如果希望一个一个变量 可以支持多种类型 就可以用联合类型 来定义
export let num: number | string;

num = 8;
num = 'eight';
// console.log(num.length);

// 2. 交叉类型 &
// 如果要对对象的形状进项拓展 可以使用 交叉类型 &

interface Person {
    name: string;
    age: number;
}

type Student = Person & { grade: number };

// 联合类型 和 交叉类型 的区别？
// 联合类型 | 是指 可以取几种类型的一种
// 交叉类型 & 是指 把几种类型合并起来

// 交叉类型 和 interface 的 extends 非常相似 都是为了实现对象形状的组合和拓展

// 3. 类型别名 type
// 类型别名（type alias）就是给类型起个别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
getName('lin');
getName(() => 'lin');

type arrItem = number | string;

const arr: arrItem[] = [1, 0, 'sad'];

type People = {
    name: Name;
};

type Student1 = People & { grade: number };

type Teacher = People & { major: string };

type StudentAndTeacher = [Student1, Teacher];

const list: StudentAndTeacher = [
    { name: 'sda', grade: 10 },
    { name: 'tea', major: 'sda' },
];

// type 和 interface 的区别
// 相同点
// 1. 都可以定义一个对象或函数
// 2. 都允许继承 interface 使用 extends 继承 type 使用 交叉类型继承

// 不同点
// 1. interface 是ts设计出来定义对象类型的 可以对对象的形状进行描述
// 2. type 是类型别名 用于给各种类型定义别名 让ts写起来更简洁 、 清晰
// 3. type 可以声明 基本类型 联合类型 交叉类型 元祖 interface 不行
// 4. interface 可以合并重复声明 type 不可以

// 合并重复声明
interface Person {
    name: string;
}

interface Person {
    age: number;
}

const p1: Person = {
    name: ' da',
    age: 10,
};

type People1 = {
    name: string;
};

type People1 = {
    age: number;
};

const p2: People1 = {
    name: 'dsa',
};

// interface 是接口 用来描述对象的形状
// type 是 类型别名 用于给各种类型定义别名 让ts写起来更简单 清晰
// 平时开发中 一般使用 组合或交叉类型的时候 用type
// 一般用类 的 extends 或 implements 是 用 interface

// 4. 类型保护

// 如果一个getLength 入参是联合类型 number | string 返回入参的length

// 5. 类型断言

// 使用类型断言来告诉ts 我（开发者） 比你 （编译器） 更清楚这个参数是什么类型
function getLength1(arg: number | string): number {
    const str = arg as string;
    if (str.length) {
        return str.length;
    } else {
        const number = arg as number;
        return number.toString().length;
    }
}

// 6. 字面量类型
// 有时候 我们需要定义一些常量 就需要用到字面量类型 比如
type ButtonSize = 'mini' | 'small' | 'normal' | 'big' | 'large';
type Sex = '男' | '女';

const sex: Sex = '女';
