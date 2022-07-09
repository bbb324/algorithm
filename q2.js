/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var lengthOfLongestSubstringKDistinct = function(s, k) {
    let l = 0;
    let r = 1;
    let max = -Infinity;
    let map = new Map();
    let i = 0;
    while(i < s.length) {
        if(!map.has(str[i])) {
            map.set(str[i], 1)
        } else {
            let val = map.get(str[i]);
            map.set(str[i], val+1);
        }
        debugger
    }
    return max;
};
const check = (str, k) => {
    let map = new Map();
    let flag = false;
    for(let i = 0; i<str.length; i++) {
        if(!map.has(str[i])) {
            map.set(str[i], 1)
        } else {
            let val = map.get(str[i]);
            map.set(str[i], val+1);
        }
    }
    map.forEach((val, index) => {
        if(val === k) {
            flag = true;
        }
    })
    return flag;
}
console.log(lengthOfLongestSubstringKDistinct('aa', 1))
