/**
 * 单调递增栈
 * https://leetcode.cn/problems/widest-vertical-area-between-two-points-containing-no-points/post-solution/?submissionId=445252914
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a,b) => a[0] - b[0]);
    let xList = new Set();
    for(let point of points) {
        let [x, y] = point;
        xList.add(x);
    }
    xList = [...xList];
    let arr = [];
    for(let i = 1; i<xList.length; i++) {
        let val = xList[i] - xList[i-1];
        arr.push(val)
    }
    return Math.max(...arr)
    
};

console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]))
console.log(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]]))