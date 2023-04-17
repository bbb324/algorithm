var largestRectangleArea = function(heights) {
    let area = 0;
    let max = 0;
    let i = 0;
    let list = [];
    while(i < heights.length) {
        if(list.length === 0 || heights[list[list.length - 1]] <= heights[i]) {
            list.push(i);
            i++;
        } else {
            let curIndex = list.pop();
            if(list.length === 0) {
                area = heights[curIndex] * i;
            } else {
                area = heights[curIndex] * (i - list[list.length - 1] - 1);
            }
            max = Math.max(max, area);
        }
       
    }
    while(list.length > 0) {
        let cur = list.pop();
        if(list.length === 0) {
            area = heights[cur] * i;
        } else {
            area = heights[cur] * (i - list[list.length - 1] - 1);
           
        }
        max = Math.max(area, max);
    }
    return max;
};

console.log(largestRectangleArea([1,1]));
console.log(largestRectangleArea([2,1,5,6,2,3]));
//console.log(largestRectangleArea([3,4,2,1,2,3,5]))
console.log(largestRectangleArea([0, 9]));
console.log(largestRectangleArea([0, 0]));