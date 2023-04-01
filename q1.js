var minOperations = function(nums, queries) {
    
    let arr = [];
    for(let i = 0; i<queries.length; i++) {
        let a1 = nums.filter(j => j < queries[i]);
        let a2 = nums.filter(j => j >= queries[i]);
        let sum1 = a1.reduce((a,b) => a + b, 0) * -1;
        let sum2 = a2.reduce((a,b) => a + b, 0);
        let total = Math.abs((sum1 + sum2) - queries[i] * nums.length);
        arr.push(total);
    }
    return arr;
};

console.log(minOperations(
    [3,1,6,8],
    [1,5]
));