var balancedString = function(s) {
    let max = 0;
    let avg = s.length / 4;
   
    let map = new Map();
    map.set('Q', 0);
    map.set('W', 0);
    map.set('E', 0);
    map.set('R', 0);
    let fast = 0;
    let slow = 0;
    while(fast < s.length && slow < s.length) {
        if(map.get(s[fast]) < avg) {
            map.set(s[fast], map.get(s[fast]) + 1);
            fast++;
        }
        if(map.get(s[fast]) === avg) {
            fast += 1;
            max = Math.max(max, (fast - slow));
           
            slow = fast;
        }
    } 
    return max === 0 ? 0 : s.length - max;
};

console.log(balancedString('QQEW'));

//console.log(balancedString('WQWRQQQW'));
//console.log(balancedString('QWER'));
/*
console.log(balancedString('QQWERQER'));
console.log(balancedString('QQQQWWWW'));
console.log(balancedString('EEEEQQQQQRRRWWWWWWWW')); */


/**
 * 用对象节
 * @param {*} s 
 * @returns 
 */
var balancedString2 = function(s) {
    let map = {
        'Q': 0,
        'W': 0,
        'E': 0,
        'R': 0
    };
    let avg = s.length / 4;
    for(let i of s) {
        map[i]++;
    }
    if(isBalanced(map, avg)) {
        return 0;
    }
    let fast = 0;
    let slow = 0;
    let min = s.length;
    while(fast < s.length) {
        let cur = s[fast];
        map[cur]--;
        while(slow <= fast && isBelowBanalce(map, avg)) {
            min = Math.min(min, fast - slow + 1);
            let char = s[slow];
            map[char]++;
            slow++;
        }
        fast++;
    }
    return min;
};

function isBelowBanalce(obj, avg) {
    return obj.Q <= avg && obj.W <= avg && obj.E <= avg && obj.R <= avg; 
}


function isBalanced(map, avg) {
    return map.Q === avg &&
    map.W === avg &&
    map.E === avg &&
    map.R === avg;
}

console.log(balancedString('QWWEQRWQ'));
//console.log(balancedString('QWEQREQR'));
//console.log(balancedString('QQWE'));