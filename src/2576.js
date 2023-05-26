/**
 * https://leetcode.cn/problems/find-the-maximum-number-of-marked-indices/description/
 * https://juejin.cn/post/7236713712626892855
 * 找出最大的当前数 * 2 < 当前数+1
 * 找右边界
 */
var maxNumOfMarkedIndices = function(nums) {
    nums.sort((a,b) => a - b)
    let l = 0;
    let r = Math.floor(nums.length /2); // 左闭右闭，就要能取到，所以向下取整
    while(l <= r) {
        let m = Math.floor((l + r) / 2);
        if(check(nums, m)) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }   
    return r * 2;
}

function check(nums, m) {
    for(let i = 0; i<m; i++) {
        if(nums[i] * 2 > nums[nums.length - m + i]) {
            return false;
        }
    }
    return true;
}

//console.log(maxNumOfMarkedIndices([42,83,48,10,24,55,9,100,10,17,17,99,51,32,16,98,99,31,28,68,71,14,64,29,15,40]))
console.log(maxNumOfMarkedIndices([3,5,2,4]))
//console.log(maxNumOfMarkedIndices([2,4,5,9]))
//console.log(maxNumOfMarkedIndices([2,3,4,5]))