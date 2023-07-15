
/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */


function compare(a,b) {
    //return a.rating === b.rating ? a.food < b.food : a.rating > b.rating; 和下面相同
    if (a.rating === b.rating) {
        // 按字典升序排列，从小到大
        return a.food < b.food;
    } else {
        return a.rating > b.rating;
    }
}

var FoodRatings = function(foods, cuisines, ratings) {
    this.countryMap = new Map(); // 每个国家对应有哪些美食
    this.foodMap = new Map(); // 食物属于哪个国家 
    this.highestMap = new Map(); // 当前国家评分最高的美食
    
    for(let i = 0; i<ratings.length; i++) {
        const food = foods[i];
        const cuisine = cuisines[i];
        const rating = ratings[i];
        const item = {food, cuisine, rating};
        this.foodMap.set(food, item);
        if(!this.countryMap.has(cuisine)) {
            this.countryMap.set(cuisine, new Heap(compare));
        }

        this.countryMap.get(cuisine).push(item);
        // this.foodMap.set(foods[i], cuisines[i]);
        // let arr = this.countryMap.get(cuisines[i]) || [];
        // if(arr.length === 0) {
          
        //     const queue = new Heap(compare);
        //     queue.push({food: foods[i], rating: ratings[i]});
           
        //     this.highestMap.set(cuisines[i], queue);
        // } else {
        //     let queue = this.highestMap.get(cuisines[i]);
        //     queue.push({food: foods[i], rating: ratings[i]});
          
        //     this.highestMap.set(cuisines[i], queue);
        // }
        // arr.push({
        //     food: foods[i],
        //     rating: ratings[i]
        // });
        // this.countryMap.set(cuisines[i], arr);
    }
  
};


/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    let {cuisine, index, rating} = this.foodMap.get(food);

    let queue = this.countryMap.get(cuisine);
    queue.root[index].rating = newRating;
    
    // 如果新值大于老值，向上更新
    if(newRating > rating) {
        queue.putUp(index);
    } else {
        // 如果新值小于等于老值，向下更新
        queue.putDown(index);
    }
};



/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
    let queue = this.countryMap.get(cuisine);
    return queue.root[0].food;
};


// 构建优先队列
class Heap{
    constructor(compare){
        this.root = [];
        this.compare = compare;
    }
    getParent(index){
        return (index-1)>>1;
    }
    getLeft(index){
        return index*2+1;
    }
    putUp(index) { //元素上升
        this.root[index].index = index;
        let indexParent = this.getParent(index);
        while(index>0 && this.compare(this.root[index], this.root[indexParent])){ //子在前, 父在后
            this.swap(index,indexParent);
            index = indexParent;
            indexParent = this.getParent(index);
        }
    }
    push(val){ //新增元素
        this.root.push(val);
        this.putUp(this.root.length - 1);
        return this.root;
    }
    putDown(index) { //元素下降
        let left = this.getLeft(index);
        let right = left+1;
        while( (left < this.root.length && this.compare(this.root[left], this.root[index])) || 
                (left + 1 <this.root.length && this.compare(this.root[right], this.root[index])) ) {
            let target = left;
            if(left + 1 <this.root.length  && this.compare(this.root[left+1],this.root[left])) target = left+1;
            this.swap(index,target);
            index = target;
            left = this.getLeft(index);
            right = left+1;
        }
    }
    top(){ //获取堆顶元素
        return this.root[0];
    }
    swap(index1,index2){ //然后交换元素位置的时候, 不交换index索引 (由于索引只有一个,其他属性有多个,所以这里是交换2次index索引, 负负得正)
        const tempIndex = this.root[index1].index;
        this.root[index1].index = this.root[index2].index;
        this.root[index2].index = tempIndex;
        [this.root[index1],this.root[index2]] = [this.root[index2], this.root[index1]];
    }
}









/* let foodRatings = new FoodRatings(
    ["emgqdbo","jmvfxjohq","qnvseohnoe","yhptazyko","ocqmvmwjq"], 
    ["snaxol","snaxol","snaxol","fajbervsj","fajbervsj"], 
    [2,6,18,6,5]
);
console.log(foodRatings.changeRating('qnvseohnoe', 5));
console.log(foodRatings.highestRated('fajbervsj'));
console.log(foodRatings.changeRating('emgqdbo', 7));
console.log(foodRatings.changeRating('jmvfxjohq', 9));
console.log(foodRatings.changeRating('emgqdbo', 14));
console.log(foodRatings.highestRated('fajbervsj'));
console.log(foodRatings.highestRated('snaxol')); */




let foodRatings = new FoodRatings(
    ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], 
    ["korean", "japanese", "japanese", "greek", "japanese", "korean"], 
    [9, 12, 8, 15, 14, 7]
);
console.log(foodRatings.highestRated('korean'));
console.log(foodRatings.highestRated('japanese')); 
console.log(foodRatings.changeRating('sushi', 16));
console.log(foodRatings.highestRated('japanese'));
console.log(foodRatings.changeRating('ramen', 16));
console.log(foodRatings.highestRated('japanese'));