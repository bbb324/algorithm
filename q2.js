var FoodRatings = function(foods, cuisines, ratings) {
  this.countryMap = new Map(); // 每个国家对应有哪些美食
  this.foodMap = new Map(); // 食物属于哪个国家 
  this.highestMap = new Map(); // 当前国家评分最高的美食
  
  for(let i = 0; i<ratings.length; i++) {
      this.foodMap.set(foods[i], cuisines[i]);
      let arr = this.countryMap.get(cuisines[i]) || [];
      if(arr.length === 0) {
        
        
          this.highestMap.set(cuisines[i], {
              food: foods[i],
              rating: ratings[i]
          })
      } else {
          let obj = {
              food: foods[i],
              rating: ratings[i]
          }
          this.setHighest(cuisines[i], obj);
      }
      arr.push({
          food: foods[i],
          rating: ratings[i]
      })
      this.countryMap.set(cuisines[i], arr)


    
  }

};

FoodRatings.prototype.setHighest = function (country, obj) {
  let highObj = this.highestMap.get(country)
  let arr = [highObj, obj];
  arr.sort((a,b) => {
      if(a.rating === b.rating) {
          return a.food.localeCompare(b.food)
      }
      return b.rating - a.rating
  })
  this.highestMap.set(country, arr[0]);
}

/** 
* @param {string} food 
* @param {number} newRating
* @return {void}
*/
FoodRatings.prototype.changeRating = function(food, newRating) {
  let country = this.foodMap.get(food);
  let arr = this.countryMap.get(country);
  let index = arr.findIndex(i => i.food === food);
  arr[index].rating = newRating;
  this.countryMap.set(country, arr);
  this.updateCountryHighest(country);

};

FoodRatings.prototype.updateCountryHighest = function(country) {
  let arr = this.countryMap.get(country);
  arr.sort((a, b) => {
      if (a.rating === b.rating) {
        return a.food.localeCompare(b.food);
      } else {
        return b.rating - a.rating;
      }
    });

  this.highestMap.set(country, arr[0])
}

/** 
* @param {string} cuisine
* @return {string}
*/
FoodRatings.prototype.highestRated = function(cuisine) {
  let obj = this.highestMap.get(cuisine);
  return obj.food; 
};



let foodRatings = new FoodRatings(
  ["cpctxzh","bryvgjqmj","wedqhqrmyc","ee","lafzximxh","lojzxfel","flhs"], 
  ["wbhdgqphq","wbhdgqphq","mxxajogm","wbhdgqphq","wbhdgqphq","mxxajogm","mxxajogm"], 
  [15,5,7,16,16,10,13]
);
console.log(foodRatings.changeRating("lojzxfel",1));
console.log(foodRatings.highestRated('mxxajogm'));
console.log(foodRatings.highestRated('wbhdgqphq'));
console.log(foodRatings.highestRated('mxxajogm'));



// let foodRatings = new FoodRatings(
//     ["emgqdbo","jmvfxjohq","qnvseohnoe","yhptazyko","ocqmvmwjq"], 
//     ["snaxol","snaxol","snaxol","fajbervsj","fajbervsj"], 
//     [2,6,18,6,5]
// );
// console.log(foodRatings.changeRating('qnvseohnoe', 11));
// console.log(foodRatings.highestRated('fajbervsj'));
// console.log(foodRatings.changeRating('emgqdbo', 3));
// console.log(foodRatings.changeRating('jmvfxjohq', 9));
// console.log(foodRatings.changeRating('emgqdbo', 14));
// console.log(foodRatings.highestRated('fajbervsj'));
// console.log(foodRatings.highestRated('snaxol'));

// let foodRatings = new FoodRatings(
//     ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], 
//     ["korean", "japanese", "japanese", "greek", "japanese", "korean"], 
//     [9, 12, 8, 15, 14, 7]
// );
// console.log(foodRatings.highestRated("korean"))
// console.log(foodRatings.highestRated("japanese"))
// console.log(foodRatings.changeRating("sushi", 16))
// console.log(foodRatings.highestRated("japanese"))
// console.log(foodRatings.changeRating("ramen", 16))
// console.log(foodRatings.highestRated("japanese"))