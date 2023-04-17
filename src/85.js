var maximalRectangle = function(matrix) {
    if(matrix.length === 0) return 0;
   
    let max = 0;
    let area = 0;
    let arr = new Array(matrix[0].length).fill(0);
    for(let i = 0; i<matrix.length; i++) {
        let tmpArr = matrix[i];
       
        for(let j = 0; j<tmpArr.length; j++) {
            if(Number(tmpArr[j]) === 0) {
                arr[j] = 0;
            } else {
                arr[j] += Number(tmpArr[j]);
            }
           
        }
        area = getMax(arr);
        max = Math.max(max, area);
    }
    return max;
};

function getMax(arr) {
    let max = 0;
    let area = 0;
    let i = 0;
    let list = [];
    while(i < arr.length) {
        if(list.length === 0 || arr[list[list.length - 1]] < arr[i]) {
            list.push(i);
            i++;
        } else {
            let index = list.pop();
            if(list.length === 0) {
                area = arr[index] * i;
            } else {
                area = arr[index] * (i - list[list.length - 1] - 1);
            }
            max = Math.max(max, area);
        }
    }
    while(list.length > 0) {
        let index = list.pop();
        if(list.length === 0) {
            area = arr[index] * i;
        } else {
            area = arr[index] * (i - list[list.length - 1] - 1);
        }
        max = Math.max(max, area);
    }
    return max;
}


/* console.log(maximalRectangle([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
])); */
console.log(maximalRectangle([
    [0,1],
    [1,0]
    
]));