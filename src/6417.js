/**
 * this.numberList 记当前数值 this.countList 记出现次数

add 的时候，原始计数-1， 新计数+1, 数字+1

delete的时候，原始技术-1， 新计数+1，数字-1

getFrequence 的时候，返回this.countList[frequence] >= 1 即可

作者：qqqq
链接：https://leetcode.cn/problems/frequency-tracker/solutions/2262316/bbb324ti-jie-shuang-shu-zu-ji-shu-bian-l-jvh4/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
var FrequencyTracker = function() {
    this.numberList = new Array(10**5+1).fill(0);
    this.countList = new Array(10**5+1).fill(0);
    
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(number) {
    this.countList[this.numberList[number]]--;
    this.numberList[number]++;
    this.countList[this.numberList[number]]++;
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
    if(this.numberList[number] > 1) {
        this.countList[this.numberList[number]]--;
        this.numberList[number]--;
        this.countList[this.numberList[number]]--;
    }
  
};

/** 
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
    return this.countList[frequency] >= 1;
    
   
};
var obj = new FrequencyTracker();
obj.add(5);
obj.add(5);
console.log(obj.hasFrequency(1));
/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */