import request from '@/utils/axios';

// typescript 中定义类型拓展有两种方式 接口（interface） 和 类型别名（type alias）
interface IResponseType<P = object> {
    code?: number;
    status: number;
    msg: string;
    data: P;
}

type resType<P = object> = {
    code?: number;
    status: number;
    msg: string;
    data: P;
};

// 接口和类型别名均可以继承拓展
interface ILogin extends IResponseType {
    token: string;
    expires: number;
}
type loginType = resType & { token: string; expires: number };

// 接口和类型别名 并不互斥 也就是说 接口可以拓展类型别名 类型别名也可以拓展接口

// 接口和类型别名的选用时机
// 1. 在定义公共api （如编辑一个库）时 使用 interface 这样可以方便使用者继承接口
// 2. 在定义组件属性 （Props） 和 状态 （State） 时， 建议使用type， 因为 type的约束性更强
// 3. type 类型不能二次编辑 而interface 可以随时拓展
const user: IResponseType = {
    code: 400,
    msg: '我是测试文字',
    status: 0,
    data: {},
};

const user2: resType = {
    code: 400,
    msg: '我是测试文字',
    status: 0,
    data: {},
};

const login: ILogin = {
    code: 400,
    msg: '我是测试文字',
    status: 0,
    data: {},
    token: '2311',
    expires: 100,
};

const login2 = {
    code: 400,
    msg: '我是测试文字',
    status: 0,
    data: {},
    token: '2311',
    expires: 100,
};
