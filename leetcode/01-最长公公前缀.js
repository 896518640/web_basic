/* 
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。
*/
const strs = ["flower", "flow", "flight"]
var longestCommonPrefix = function (strs) {
    // const len = strs.length
    // // console.log(len)
    // const resArr = []
    // for (let i = 0; i < len; i++) {
    //     let strLength = strs[i].length
    //     let con = ''
    //     let pub = []
    //     for (let j = 0; j < strLength; j++) {
    //         // 当前字符
    //         let str = strs[i].charAt(j)
    //         con += str
    //         pub.push(con)
    //     }
    //     // console.log(pub)
    //     resArr.push(pub)
    // }
    // console.log(resArr)
    // let arr = []
    // for (let i = 0; i < resArr.length; i++) {
    //     let temp = resArr[i][0]
    //     arr.push(temp)
    //     console.log(arr)
    //     for (let j = 0; j < resArr[i].length; j++) {
    //         console.log(resArr[i][j])
    //     }
    // }
    // ways1 :
    // let re = ''
    // if(!strs.length)return re
    // // 表示第i位字符
    // for (let i = 0; i < strs[0].length; i++) {
    //     // 表示第j个字符串
    //     for (let j = 1; j < strs.length; j++) {
    //         // 说明没有公共前缀
    //         if(strs[j][i]!=strs[0][i]) return re
    //     }
    //     re += strs[0][i]
    // }
    // return re

    // ways2 :
    let result = ''
    // 公共开头
    let pub = ''
    // 遍历第一个字符串 的第i位
    for (let i = 0; i < strs[0].length; i++) {
        // pub 代表 开头字母
        pub += strs[0][i]
        // 以第一个字符串作为参照 
        if (strs.every(str => str.startsWith(pub))) {
            result = pub 
        }
    }
    return result
};
console.log(longestCommonPrefix(strs))