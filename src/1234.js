/**
 * https://leetcode.cn/problems/replace-the-substring-for-balanced-string/solutions/2374072/hua-dong-chuang-kou-dang-qian-jian-yi-ge-hm0p/
 * 要理解这两句话

快慢指针，字符串，

**当前 sub 字符串如果都小于等于平均数，则是一个解**
**当前减一个，开头补一个** 

## 第一步
先判断原始字符串是否满足，满足则返回0

## 第二步
定义`slow = 0, fast = 0` 快慢指针，
定义`map`对象，记录当前`sub`字符串内，每个字符有多少个
每次遍历时，进行：**当前减一个**

如果满足 `belowBalance` 说明是一个解，
先计算`min`
再进行：**开头补一个**

## 第三步
返回`min`


 */

var balancedString = function(s) {
    let avg = s.length / 4;
    let obj = {
        'Q': 0,
        'W': 0,
        'E': 0,
        'R': 0,
    }
    for(let i of s) {
        obj[i]++;
    }
    if(isBalanced(obj, avg)) {
        return 0
    }
    let min = s.length;
    let fast = 0, slow = 0;
    while(fast < s.length) {
        let cur = s[fast];
        obj[cur]--;
        while(slow <= fast && isBelowBanalce(obj, avg)) {
            min = Math.min(min, fast - slow + 1);
            let char = s[slow];
            obj[char]++;
            slow++;
        }
        fast++
    }
    return min;
}
function isBelowBanalce(obj, avg) {
    return obj.Q <= avg && obj.W <= avg && obj.E <= avg && obj.R <= avg; 
}

function isBalanced(obj, avg) {
   return obj.Q === avg && obj.W === avg && obj.E === avg && obj.R === avg;
}
console.log(balancedString('WWEQERQWQWWRWWERQWEQ'))