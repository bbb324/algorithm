/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let res = [];
    backtrack(0, []);
    function backtrack(k, list) {
        if(k === nums.length) {
            console.log([...list])
            res.push([...list]);
            return;
        }
 
        list.push(nums[k]);
        backtrack(k+1, list);
        list.pop();
        backtrack(k+1, list);
    }
    //res.reverse()
    res.sort((a,b) => {
        if(a.length !== b.length) {
            return a.length - b.length
        } else {
            return b[0] - a[0]
        }
    })
 };
 console.log(subsets([1,2,3]))