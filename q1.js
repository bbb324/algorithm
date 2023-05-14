var largestRectangleArea = function(heights) {
    let max = 0;
    let list = [];
    let area = 0;
    for(let i = 0; i<heights.length; i++) {
        if(heights[i] === 0) {
            list = [];
            continue;
        }
        if(list.length === 0 || heights[list[list.length-1]]<= heights[i]) {
            list.push(i);
        } else {
            let index = list.pop();
            if(list.length === 0) {
                //max = Math.max(max, heights[index])
                area = heights[index] * i;
            } else {
                area = heights[index] * (i-list[list.length - 1] -1);
            }
            max = Math.max(max, area);
        }
    }
    while(list.length > 0) {
        let index = list.pop();
        if(list.length === 0) {
            //max = Math.max(max, heights[index])
            area = heights[index] * i;
        } else {
            area = heights[index] * (i-list[list.length - 1] -1);
        }
        max = Math.max(max, area);
    }

    return max;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));