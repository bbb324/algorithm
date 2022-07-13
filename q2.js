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
 
                // 如果相同则相互抵消
                if(last + asteroids[i] === 0) {
                    list.pop();
                    break;
                }
 
                // 如果出现 [1] -2 则 list pop()
                if(last + asteroids[i] < 0) {
                    list.pop();
                    if(list.length === 0) {
                        list.push(asteroids[i])
                        break;
                    }
                    
                }
                // 如果出现 [2] -1 则直接break
                if(last + asteroids[i] > 0) {
                    break;
                }
                
                // 如果出现相同方向[-2] -2 则直接 push 
                if(last * asteroids[i] > 0) {
                    list.push(asteroids[i]);
                    break;
                }
            }
        }
    }
    return list;
 };