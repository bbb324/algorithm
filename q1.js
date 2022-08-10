var numSplits = function(s) {
    let index = 1;
    let sum = 0;
    let set1 = new Set();
    let set2 = new Set();
    while(index < s.length) {
        let str1 = s.slice(0, index);
        let str2 = s.slice(index, s.length + 1);
        if(isGood(str1, str2)) {
            sum++;
        }
        index++;
    }
    return sum;
};
function isGood(str1, str2) {
    let set1 = new Set();
    let set2 = new Set();
    for(const s of str1) {
        set1.add(s);
    }
    for(const s of str2) {
        set2.add(s);
    }
    return set1.size === set2.size;
}

console.log(numSplits("acbadbaada"))