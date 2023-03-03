const px2rem = require('postcss-plugin-px2rem')
module.exports= {
    plugins: [
        require('autoprefixer'),
        px2rem({
            rootValue: 32, // 对应16px 适配移动端750px宽度
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        })
    ]
}