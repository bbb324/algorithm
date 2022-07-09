var findMaxAverage = function(nums, k) {
    let tmp = nums.slice(0, k);
    let sum = tmp.reduce((a,b) => a + b);
    let max = -Infinity;
    for(let i = k; i<nums.length; i++) {
        sum = sum - nums[i-k] + nums[i];
        max = Math.max(max, sum)
    }
    return max / 4
};

console.log(findMaxAverage([1,12,-5,-6,50,3],
    4))