var continuousSubarrays = function(nums) {
  let max = nums[0];
  let min = nums[0];
  let ans = 0;
  let j = -1;
  for(let i = 0; i<nums.length; i++) {
    if(nums[i] <= max && nums[i] >= min) {
      ans += i - j;
      continue;
  }
    j = i - 1;
    max = nums[i];
    min = nums[i];
    while(j >= 0) {
      if(max - nums[j] > 2 || nums[j] - min > 2) {
        break;
      }
      max = Math.max(max, nums[j]);
      min = Math.min(min, nums[j]);
      j--
    }
    ans += i - j;
  }
  return ans;
};

function isValidWindow(left, right, nums) {
  let max = nums[left]
  let min = nums[right]
  for(let i = left; i<=right; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[i]);
    if(max - min > 2) {
      return false;
    }
  }
  return true;
}

//console.log(continuousSubarrays([65,66,67,66,66,65,64,65,65,64]))
console.log(continuousSubarrays([5,4,2,4]))