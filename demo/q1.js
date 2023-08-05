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