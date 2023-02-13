// 工具类型
// Omit<T,U> 从类型T中剔除U的所有属性

interface IPerson {
    name: string;
    age: number;
}

type IOmit = Omit<IPerson, 'age'>; // 剔除age属性
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// 那么就可以用Pick和Exclude 实现

type Omit2<T, K extends keyof any> = {
    [P in Exclude<keyof T, K>]: T[P];
};

// NonNullable 用来过滤类型中的null 以及 undefined  类型
type T0 = NonNullable<string | number | undefined>;
type T1 = NonNullable<string[] | null | undefined>;

type NonNullable<T> = T extends null | undefined ? never : T;

//Parameters 获取函数的参数类型 将每个参数类型放在一个元祖中
type T2 = Parameters<() => string>; // []
type T3 = Parameters<(arg: string) => void>; // [string]
type T4 = Parameters<(arg1: string, arg2: number) => void>;
const t2: T2 = [];

type Parameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
) => any
    ? P
    : never;

// 在条件类型语句中 可以用infer 声明一个类型变量 并且对他进行使用
// Parameters 首先约束参数T必须是函数类型
// 判断T是否是函数类型 如果是 则使用 infer P 暂时存一下函数的参数类型 后面的语句直接用P
// 即可得到这个类型的返回 否则就返回never

// ReturnType 获取函数的返回值类型
type T5 = ReturnType<() => string>; // string
type T6 = ReturnType<() => void>;

// 类型体操
// Typescript 高级类型会根据类型参数求出新的类型 这个过程会涉及一系列的类型计算逻辑 这些类型计算逻辑就叫做类型体操
type createArr<Len, Ele, Arr extends Ele[] = []> = Arr['length'] extends Len
    ? Arr
    : createArr<Len, Ele, [Ele, ...Arr]>;

type Add<A extends number, B extends number> = [
    ...createArr<A, 1>,
    ...createArr<B, 1>,
]['length'];

const a: Add<3, 6> = 9;

type RepeatStr<
    Str extends string,
    Count,
    Arr extends Str[] = [],
    ResStr extends string = '',
> = Arr['length'] extends Count
    ? ResStr
    : RepeatStr<Str, Count, [Str, ...Arr], `${Str}${ResStr}`>;

type res = RepeatStr<'str', 2>;
