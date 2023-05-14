var wordBreak = function(s, wordDict) {
    let set = new Set();
    for(let word of wordDict) {
        set.add(word);
    }
    let memo = [];

    function backtrack(start) {
        if(start === s.length) {
            return true;
        }
        if(memo[start]!== undefined) {
            return memo[start];
        }

        // 想不起来怎么开始遍历
        for(let i = start+1; i<s.length; i++) {
            let str = s.slice(start, i);
            if(set.has(str)) {
                if(backtrack(i)) {
                    memo[start] = true;
                    return true;
                }
            }
        }
        memo[start] = false;
        return false;
    }

    return backtrack(0);
};

console.log(wordBreak('leetcode', ['leet', 'code']));