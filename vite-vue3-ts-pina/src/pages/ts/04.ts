// js 是靠原型和原型链来实现面向对象编程的 es6 新增了语法糖 class
// ts 通过 public private protected 三个修饰符来增强了js 中的类

// 1. 基本写法

export class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    speak() {
        console.log(`my name is ${this.name}`);
    }
}

const p1 = new Person('张三');
p1.name;
p1.speak();

// 2. 继承
// 使用extends 关键字 实现继承
class Student extends Person {
    study() {
        console.log(`${this.name} needs study`);
    }
}

const s1 = new Student('lin');

s1.name;
// super 关键字 上述 Student 类没有定义自己的属性 可以不写super
// 但是如果 Student 类 有自己的属性 就要用到 super 关键字 来把父类的属性继承过来

class Student1 extends Person {
    grade: number;
    constructor(name: string, grade: number) {
        super(name); // 通过super 传给父类的构造函数
        this.grade = grade;
    }
}

// 3. 多态
// 子类对父类的方法进行了重写 子类和父类调同一个方法时会不一样
class Student2 extends Person {
    speak(): void {
        console.log(`student ${super.speak()}`);
    }
}

// 4. public
// public 公有的 一个类里默认所有的方法和属性都是public
// 比如上文中定义的person类

class Person2 {
    public name: string;
    public constructor(name: string) {
        this.name = name;
    }
    public speak() {
        console.log(`${this.name} is speaking`);
    }
}

// 5. private
// private 私有的 只属于这个类自己 他的实例和继承他的子类都访问不到
class Person3 {
    private name: string;
    public constructor(name: string) {
        this.name = name;
    }
    public speak() {
        console.log(`${this.name} is speaking`);
    }
}

const p2 = new Person3('liu');
p2.name;

class Person4 extends Person3 {
    study() {
        console.log(`${this.name} needs study`);
    }
}

// 6. protected
// protected 受保护的 类本身和子类内部非static方法内部可以访问 实例不能访问

// 7. static
// static 是静态属性 可以理解为是类上的一些常量 只有类本身及其子类可以使用 实例不能访问

// 8. 抽象类
// 所谓抽象类 就是指 只能被继承 但不能被实例化的类
// 特点 1. 抽象类不允许被实例化
//     2. 抽象类的抽象方法必须被子类实现

abstract class Animal {
    constructor(name: string) {
        this.name = name;
    }
    public name: string;
    public abstract sayHi(): void;
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    public sayHi(): void {
        console.log('name');
    }
}
const a = new Animal();

// 抽象方法 和 多态
// 多态 指的是 父类定义一个抽象方法 在多个子类中有不同的实现 运行的时候不同的子类就对应不同的操作
abstract class Animal1 {
    constructor(name: string) {
        this.name = name;
    }
    public name: string;
    public abstract sayHi(): void;
}

class Cat extends Animal1 {
    constructor(name: string) {
        super(name);
    }
    public sayHi(): void {
        console.log('miao');
    }
}

class Pig extends Animal1 {
    constructor(name: string) {
        super(name);
    }
    public sayHi(): void {
        console.log('huhuhuhuhu');
    }
}

// 9. this 类型
// return this
// 1. 链式调用
class StudyStep {
    step1() {
        console.log('listen');
        return this;
    }
    step2() {
        console.log('write');
        return this;
    }
}

const s = new StudyStep();
s.step1().step2();

// 2. 灵活调用子类父类方法
// 在继承的时候 this 可以表示父类型 也可以表示子类型
// 这就保持了父类和子类之间接口调用的连贯性
class StudyStep2 {
    step1() {
        console.log('listen');
        return this;
    }
    step2() {
        console.log('write');
        return this;
    }
}

class MyStudy extends StudyStep2 {
    next() {
        console.log('before done , study next!');
        return this;
    }
}

const m = new MyStudy();

m.next().step1().next().step2();
