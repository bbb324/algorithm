var largestRectangleArea = function(heights) {
    let area = 0;
    let max = 0;
    let list = [];
    let i = 0;
    while(i < heights.length) {
        if(list.length === 0 || heights[i] >= heights[list[list.length - 1]]) {
            list.push(i);
            i++;
        } else {
            let index = list.pop();
            if(list.length === 0) {
                area = heights[index] * i;
            } else {
                area = heights[index] * (i - list[list.length - 1] - 1);
            }
            max = Math.max(max, area);
        }
    }
    while(list.length > 0) {
        let index = list.pop();
        if(list.length === 0) {
            area = heights[index] * i;
        } else {
            area = heights[index] * (i - list[list.length - 1] - 1);
        }
        max = Math.max(max, area);
    }
    return max;
};
 
console.log(largestRectangleArea([1,1]));
console.log(largestRectangleArea([2,1,5,6,2,3]));
//console.log(largestRectangleArea([3,4,2,1,2,3,5]))
console.log(largestRectangleArea([0, 9]));
console.log(largestRectangleArea([0, 0]));