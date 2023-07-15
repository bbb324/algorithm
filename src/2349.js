/**
 * 这里注意，时间复杂度超标，一般是用了 filter，可以用 splice 代替，参考下面代码
 * 一般在需要返回最小值的题，需要用一个map 来存储最小值，到时候直接返回即可
 * 每次在更新数组的时候，需要一并更新最小值
 * https://leetcode.cn/problems/design-a-number-container-system/submissions/
 * 
 */

var NumberContainers = function() {
    this.numberMap = new Map(); // 存储number对应 index
    this.indexMap = new Map(); // 存储index 在哪些number里面,如果修改，需要删掉老的值
    this.numberMin = new Map(); // 存储number当前最小index
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    if(this.indexMap.get(index) !== undefined) {
        this.delete(index);
    }
    
    let arr = this.numberMap.get(number) || [];
    if(arr.length === 0) {
        this.numberMap.set(number, [index])
        this.numberMin.set(number, index);
    } else {
        arr.push(index);
        this.numberMap.set(number, arr);
        this.updateMin(number)
    }
    this.indexMap.set(index, number)

};

NumberContainers.prototype.updateMin = function (number) {
    let arr = this.numberMap.get(number) || [];
    if(arr.length === 0) {
        this.numberMin.set(number ,-1);
        return;
    }
    let min = Infinity;
    for(let i = 0; i<arr.length; i++) {
        min = Math.min(min, arr[i])
    }
    this.numberMin.set(number, min)
}

NumberContainers.prototype.delete = function(index) {
    let number = this.indexMap.get(index);
    if(number !== undefined) {
        let arr = this.numberMap.get(number);
        //arr = arr.filter(i => i !== index);
        const k = arr.findIndex(text => text === index);
        arr.splice(k, 1);

        this.numberMap.set(number, arr);
    }
    this.updateMin(number);
}

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    let val = this.numberMap.get(number)
    if(val === undefined || val === Infinity) {
        return -1;
    }
    return this.numberMin.get(number);
};
let nc = new NumberContainers();
console.log(nc.find(10)); // 没有数字 10 ，所以返回 -1 。
console.log(nc.change(2, 10)); // 容器中下标为 2 处填入数字 10 。
console.log(nc.change(1, 10)); // 容器中下标为 1 处填入数字 10 。
console.log(nc.change(3, 10)); // 容器中下标为 3 处填入数字 10 。
console.log(nc.change(5, 10)); // 容器中下标为 5 处填入数字 10 。
console.log(nc.find(10)); //) 数字 10 所在的下标为 1 ，2 ，3 和 5 。因为最小下标为 1 ，所以返回 1 。
console.log(nc.change(1, 20)); // 容器中下标为 1 处填入数字 20 。注意，下标 1 处之前为 10 ，现在被替换为 20 。
console.log(nc.find(10)); //) 数字 