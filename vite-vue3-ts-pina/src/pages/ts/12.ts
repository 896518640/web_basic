// 定义一个复杂的数据类型

interface Item {
    name: string;
    link: string;
    info: string;
}
interface LinkItem<T> {
    type: string;
    list: T[];
}
const arr: LinkItem<Item>[] = [
    {
        type: 'codeWeb',
        list: [
            {
                name: 'dev.to',
                link: 'www.baidu.com',
                info: '拥有百万开发者的技术社区，开发者分享交流，获取最新技术咨询，提高专业能力的好地方',
            },
        ],
    },
    {
        type: 'tools',
        list: [
            {
                name: 'dev.to',
                link: 'www.baidu.com',
                info: '拥有百万开发者的技术社区，开发者分享交流，获取最新技术咨询，提高专业能力的好地方',
            },
        ],
    },
];
