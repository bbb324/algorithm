function continuousSubarrays(nums) {
    const n = nums.length;
    let count = 0;
    let left = 0;
    let right = 0;
  
    while (right < n) {
      if (isValidWindow(nums, left, right)) {
        count += right - left + 1;
        right++;
      } else {
        left++;
        right = Math.max(right, left);
      }
    }
  
    return count;
  }
  
  function isValidWindow(nums, left, right) {
    let min = nums[left];
    let max = nums[left];
  
    for (let i = left + 1; i <= right; i++) {
      min = Math.min(min, nums[i]);
      max = Math.max(max, nums[i]);
      if (max - min > 2) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(continuousSubarrays([65,66,67,66,66,65,64,65,65,64]))
  console.log(continuousSubarrays([5,4,2,4]))