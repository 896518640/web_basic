// declare 关键字 相当于告诉ts编译器 这个变量vue 的类型已经在其他地方定义了 不要报错

// .d.ts
// 通常我们会把声明语句放到一个单独的文件 (vue.d.ts) 中 这就是声明文件 以.d.ts 为后缀。
// src/vue.d.ts
interface VueOption {
    el: string;
    data: any;
}

declare class Vue {
    options: VueOption;
    constructor(options: VueOption);
}

// 使用三方库
// 当我们使用三方库的时候 是不是所有的三方库都要写一大堆declare的文件呢
// 不一定 首先要看看社区里有没有这个三方库的ts类型包 （一般都有）
// 社区使用 @types 统一管理三方库的声明文件

// 自己写声明文件
// 比如你以前写了一个请求小模块 myFetch
function myFetch(url: string, method, data) {
    return fetch(url, {
        method: method,
        body: data ? JSON.stringify(data) : '',
    }).then((res) => res.json());
}

myFetch.get = (url: string) => {
    return myFetch(url, 'GET', {});
};

myFetch.post = (url, data) => {
    return myFetch(url, 'POST', data);
};

export default myFetch;
//现在新项目用了ts 要在新项目中继续使用这个myFetch
// 1. 用ts重写myFetch 新项目引用重写的myFetch
// 2. 直接引用myFetch 给他写声明文件

type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
declare function myFetch<T = any>(
    url: string,
    method: HTTPMethod,
    data?: any,
): Promise<T>;

declare namespace myFetch {
    const get: <T = any>(url: string) => Promise<T>;
    const post: <T = any>(url: string, data: any) => Promise<T>;
}
