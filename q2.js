var balancedString = function(s) {
  let map = {
    'Q': 0,
    'W': 0,
    'E': 0,
    'R': 0
  }
  for(let i of s) {
    map[i]++;
  }
  let target = s.length / 4;
  if(Object.keys(map).every(item => map[item] === target)) {
    return 0;
  }
  let min = s.length;
  let slow = 0, fast = 0;
  while(fast < s.length) {
    let cur = s[fast];
    map[cur]--;
    while(slow <= fast && belowBalance(map, target)) {
      min = Math.min(min, fast - slow + 1);
      const slowChar = s[slow];
      map[slowChar]++;
      slow++;
    }
    fast++;
  }
  return min;
}

function belowBalance(map, count) {
  return map.Q <= count && map.W <= count && map.E <= count && map.R <= count;
}
function isBalanced(map, count) {
  if(Object.keys(map).every(item => map[item] <= count)) {
    return false;
  }
  return true;
}
//console.log(balancedString('QQER'))
console.log(balancedString('WWEQERQWQWWRWWERQWEQ'))
//console.log(balancedString('QQER'))