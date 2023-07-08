var longestSubarray = function(nums, limit) {
  let left = 0;
  let right = 0;
  let ans = 0;
  while(right < nums.length) {
    if(isValid(left, right, limit, nums)) {
      ans = Math.max(ans, right - left + 1)
      right++;
    } else {
      left = left + 1;
      right = left;
    }
  }
  return ans;
};

function isValid(left, right, limit, nums) {
  let max = nums[left];
  let min = nums[left];
  for(let i = left; i<= right; i++) {
    if(nums[i] - min > limit || max - nums[i] > limit) {
      return false;
    }
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i])
  }
  return true;
}

//console.log(isValid(2, 7, 4, [1,5,6,7,8,10,6,5,6]))

//console.log(longestSubarray([8,2,4,7], 4))
console.log(longestSubarray([1,5,6,7,8,10,6,5,6], 4))

// console.log(longestSubarray([8,2,4,7], 4))