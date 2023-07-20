/**
 * 
 * 如何判断队满？
 * 一开始要设置数组长度 k+1
 * 然后通过 (end + 1) % this.data.length === front 判断是否满了
 * 
 * 每次更新index, 只需要写一个 updateIndex 函数来更新就好，不需要过度关注+1， -1
 * 取end的时候要注意，需要重新判断下位置
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.array = new Array(k+1).fill(-1);
    this.front = 0;
    this.end = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) {
        return false;
    }
    this.array[this.end] = value;
    this.end = this.updateIndex(this.end);
 
    return true;
};

MyCircularQueue.prototype.updateIndex = function(index) {
    return (index+1)%this.array.length;
};
/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) {
        return false;
    }
    this.front = this.updateIndex(this.front);
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) {
        return -1;
    }
    return this.array[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) {
        return -1;
    }
    let relEnd = (this.end + this.array.length -1) % this.array.length;
    return this.array[relEnd];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.front === this.end;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.end + 1) % this.array.length === this.front;

};

/* var obj = new MyCircularQueue(2);
console.log(obj.enQueue(1));
console.log(obj.Rear());
console.log(obj.Front()); */


/* var obj = new MyCircularQueue(2);
console.log(obj.enQueue(1));
console.log(obj.enQueue(2));
console.log(obj.deQueue());
console.log(obj.enQueue(3));
console.log(obj.deQueue());
console.log(obj.enQueue(3));
console.log(obj.deQueue());
console.log(obj.enQueue(3));
console.log(obj.deQueue());
console.log(obj.Front()); */


/* var obj = new MyCircularQueue(6);
console.log(obj.enQueue(6));
console.log(obj.Rear());
console.log(obj.Rear());
console.log(obj.deQueue());
console.log(obj.enQueue(5));
console.log(obj.Rear());
console.log(obj.deQueue());
console.log(obj.Front());
console.log(obj.deQueue());
console.log(obj.deQueue());
console.log(obj.deQueue()); */



/* var obj = new MyCircularQueue(6);
console.log(obj.enQueue(6));
console.log(obj.Rear());
console.log(obj.Rear());
console.log(obj.deQueue());
console.log(obj.enQueue(5));
console.log(obj.Rear());
 */

/* console.log(obj.enQueue(3));
console.log(obj.enQueue(4));
console.log(obj.Rear());
console.log(obj.isFull());

console.log(obj.enQueue(4));
console.log(obj.Rear()); */

var obj = new MyCircularQueue(3);
console.log(obj.enQueue(1));
console.log(obj.enQueue(2));
console.log(obj.enQueue(3));
console.log(obj.enQueue(4));
console.log(obj.Rear());
console.log(obj.isFull());
console.log(obj.deQueue());
console.log(obj.enQueue(4));
console.log(obj.Rear());

