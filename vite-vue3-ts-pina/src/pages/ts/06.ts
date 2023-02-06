import { Direction } from './06';
// 枚举
// 在任何项目开发中 我们都会遇到定义常量的情况 常量就是指不会被改变的值
// ts 中我们使用 const 来生命常量 但是有些取值实在一定范围内的一系列常量 比如一周有七天 方向 上下左右

// 1. 基本使用
export enum Direction {
    Up,
    Down,
    Left,
    Right,
}
// 这样就定义了一个 数字枚举 它有两个特点
// 1. 数字递增
// 2. 反向映射

console.log(Direction.Up); // 0
console.log(Direction.Down); // 1
console.log(Direction.Left); // 2
console.log(Direction.Right); // 3

// 枚举会对枚举值 到枚举名 进行反向映射

console.log(Direction[0]); // Up
console.log(Direction[1]); // Down
console.log(Direction[2]); // Left
console.log(Direction[3]); // Right

// 如果枚举第一个元素 赋有初始值 就会从初始值开始递增
enum Direction1 {
    Up = 6,
    Down,
    Left,
    Right,
}

console.log(Direction1.Up); // 6
console.log(Direction1.Down); // 7
console.log(Direction1.Left); // 8
console.log(Direction1.Right); // 9

// 2. 反向映射的原理
// 枚举是如何进行反向映射的
// var Direction;
// (function (Direction) {
//     Direction[(Direction['Up'] = 6)] = 'Up';
//     Direction[(Direction['Down'] = 7)] = 'Down';
//     Direction[(Direction['Left'] = 8)] = 'Left';
//     Direction[(Direction['Right'] = 9)] = 'Right';
// })(Direction || (Direction = {}));

// Direction[(Direction['Up'] = 6)] = 'Up';
// 这行代码 相当于
// Direction[6] = 'Up'
// Direction['Up] = 6

// 3. 手动赋值
// 定义一个枚举来管理外卖状态 分别有一下单 配送中 已接收 三个状态

enum ItemStatus {
    Buy = 1,
    Send = 200,
    Receive = 20,
}
// 可以根据实际后端的需求 去这么写
console.log(ItemStatus['Buy']); // 1
console.log(ItemStatus['Send']); // 200
console.log(ItemStatus['Receive']); // 20

// 4. 计算成员
// 枚举中的成员可以倍计算 比如经典的使用位运算合并权限
enum FileAccess {
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
}

console.log(FileAccess.Read); // 2
console.log(FileAccess.Write); // 4
console.log(FileAccess.ReadWrite); // 6

// 5. 字符串枚举

// 字符串枚举的意义在于 提供 有具体语义的字符串 可以更容易的理解代码 和调试

enum Direction2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

const value = 'UP';
if (value === Direction2.Up) {
}

// 6. 常量枚举

const enum Direction3 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

const value2 = 'UP';
if (value === Direction3.Up) {
}

// 常量枚举 和 普通枚举 的区别
// 1、 普通枚举被编译时 会被编译成一个对象 可以被当做对象使用
// 2、 常量枚举 会在 ts 编译期间被删除 const 枚举成员在使用的地方会被内敛进来 避免额外的性能开销

// 注意：
// 常量枚举 不允许包含计算成员

// 小结
// 1. 枚举的意义在于，可以定义一些带名字的常量集合，清晰地表达意图和语义，更容易地理解代码和调试。
// 2. 常用语和后端联调时，区分后端返回的一些代表状态语义的数字或字符串 降低阅读代码时的心智负担
