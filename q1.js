var combinationSum = function(candidates, target) {
    candidates.sort((a,b) => a - b);
    let index = 0;
    let res = [];
    // 这里会出现重复，看需要怎么去重，我想到的是变成字符串，然后去重
    backtrack([]);
    function backtrack(list) {
        if(getSum(list) === target) {
           
            res.push(list)
            list = [];
            return;
        } else if(getSum(list) > target) {
            list.pop();
            return;
        }
        for(let i = index; i<candidates.length; i++) {

            backtrack([...list, candidates[i]])
        }
    }
    return res;
};

function getSum(list) {
    if(list.length === 0) {
        return 0;
    }
   return list.reduce((a,b) => a + b)
}

console.log(combinationSum([1,2],4))