/**
 * https://leetcode.cn/problems/Nsibyl/description/
 * @param {*} rampart 
 * @returns 
 */
var rampartDefensiveLine = function(rampart) {
    let l = 0;
    let r = rampart[rampart.length - 1][0] - rampart[0][1];
    while(l < r) {
        let m = Math.floor((l + r + 1) / 2);
        if(check(m, rampart)) {
            l = m;
        } else {
            r = m-1;
        }
    }   
    return l;
};
function check(len, rampart) {
    let ls = rampart[1][0] - rampart[0][1];
    for(let i = 1; i<rampart.length - 1; i++) {
        let last =  rampart[i+1][0] - rampart[i][1];
        if(ls >= len) {
            ls = last;
        } else {
            ls = last - (len - ls);
        }
        if(ls < 0) {
            return false;
        }
    }
    return true;
}
console.log(rampartDefensiveLine([[1,2],[5,8],[11,15],[18,25]]));