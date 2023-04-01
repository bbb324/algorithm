var primeSubOperation = function(nums) {
    let v = isInc(nums);
    if(v) {
        return true;
    }
    let i = 1;
    let used = [];
    while(true) {
       
        if(isInc(nums)) {
            return true;
        }
        i = i % nums.length;
        if(nums[i-1] > nums[i]) {
            if(used.indexOf(i - 1) >= 0) {
                break;
            }
            let v = getZ(nums[i-1]);
            nums[i-1] = nums[i-1] - v;
            used.push(i - 1);
        }
        i++;
        
        //debugger;
    }
    return false;
};

function getZ(v) {
    for(let i = v-1; i>= 2; i--) {
        if(izZ(i)) {
            return i;
        }
    }
    return 0;
}

function izZ(v) {
    if(v === 0 || v === 1) {
        return false;
    }
    let flag = true;
    let half = Math.floor(v / 2);
    for(let i = 2; i<=half; i++) {
        if(v % i === 0) {
            flag = false;
            break;
        }
    }
    return flag;
}


function isInc(arr) {
    let prev = arr[0];
    for(let i = 1; i<arr.length; i++) {
        if(arr[i] > prev) {
            prev = arr[i];
        } else {
            return false;
        }
    }
    return true;
}

//console.log(primeSubOperation([6,11,11,12]));
//console.log(primeSubOperation([4,9,6,10]));
//console.log(primeSubOperation([5,8,3]));
console.log(primeSubOperation([17, 2]));