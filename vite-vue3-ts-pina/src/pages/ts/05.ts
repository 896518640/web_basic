// interface 和 class 的关系？
// interface 是 ts 设计出来用于定义对象类型的 可以对对象的形状进行描述
// interface 同样可以用来约束 class 要是先约束关系 需要用到 implement 关键字

export interface MusicInterface {
    playMusic(): void;
}

class CellPhone implements MusicInterface {
    playMusic(): void {
        console.log('play music');
    }
}

// 定义了约束后 class  必须要满足接口上的所有条件。 不写会报错

// 2. 处理公共的属性和方法

// 不同的类有一些共同的属性和方法 使用继承很难完成
// 比如汽车 （Car 类） 也有播放音乐的功能
// 用 Car 类 继承 Cellphone 类
// 找一个 Car 类 和 Cellphone 类的父类 父类有播放音乐的方法 他们俩继承这个父类

interface CallInterface {
    makePhoneCall(): void;
}

class Car implements MusicInterface {
    playMusic(): void {}
}

class MobilePhone implements MusicInterface, CallInterface {
    playMusic(): void {}
    makePhoneCall(): void {}
}

// 这个CallInterface 也可以用于iPad 类、 手表类上面， 毕竟他们也能打电话。
// interface 来约束class 只要class 实现了interface 规定的属性或方法 就行了 ，没有继承那么多条条框框，非常灵活

// 3. 约束构造函数 和 静态属性
// 使用 implements 只能约束类实例上的属性和方法 ， 要约束构造函数和静态属性 需要这么写

interface CircleStatic {
    new (radius: number): void;
    pi: number;
}

const Circle: CircleStatic = class Circle {
    static pi = 3.15;
    public radius: number;
    public constructor(radius: number) {
        this.radius = radius;
    }
};
