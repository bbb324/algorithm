/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
 var asteroidCollision = function(asteroids) {
   let list = [];
    for(let i = 0; i<asteroids.length; i++) {
        if(list.length === 0 || asteroids[i] > 0) {
            list.push(asteroids[i])
        } else {
            while(true) {
                let last = list[list.length - 1];
                if((last + asteroids[i]) === 0) {
                    list.pop();
                    break;
                }
                if(last * asteroids[i] > 0) {
                    list.push(asteroids[i]);
                    break;
                }
                if(last + asteroids[i] > 0) {
                    break;
                }
                if(last + asteroids[i] < 0) {
                    list.pop();
                    if(list.length === 0) {
                        list.push(asteroids[i]);
                        break;
                    }
                }
       
            }
        } 
    }
    return list;
};

//console.log(asteroidCollision([10, 2, -5]))
console.log(asteroidCollision([-2, -2, 1, -2]))