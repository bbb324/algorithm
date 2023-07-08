/**
 * 类似2762题解
 * 需要及时更新 max, min 的大小
 * 在做 r-- 去更新 max, min   之前！！！！
 * 需要先设定 
 * max = nums[l]; min = nums[l]
 * 
 * https://leetcode.cn/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/2335808/bbb324-shuang-zhi-zhen-by-qqqq-18-l464/
 */

var longestSubarray = function(nums, limit) {
    let ans = 0;
    let max = nums[0];
    let min = nums[0];
    let r = -1;
    for(let l = 0; l < nums.length; l++) {
        if(max - nums[l] <= limit && nums[l] - min <= limit) {
            ans = Math.max(ans, l - r);
            max = Math.max(max, nums[l]);
            min = Math.min(min, nums[l]);
            continue;
        }
        r = l - 1;
        max = nums[l];
        min = nums[l];
        while(r >= 0) {
            if(max - nums[r] > limit || nums[r] - min > limit) {
                break;
            }
            max = Math.max(max, nums[r]);
            min = Math.min(min, nums[r]);
            r--;
        }
        ans = Math.max(ans, l - r);
    }
    return ans;
};

console.log(longestSubarray([8,2,4,7], 4)) // 3
//console.log(longestSubarray([4,2,2,2,4,4,2,2], 0)) // 3