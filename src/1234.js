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