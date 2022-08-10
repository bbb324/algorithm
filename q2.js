var getFolderNames = function(names) {
    let res = [];
    let set = new Set();
    for(let name of names) {
        if(set.has(name)) {
            for(let i = 1; ;i++) {
                let str = `${name}(${i})`;
                if(!set.has(str)) {
                    set.add(str)
                    break;
                }
            }
        } else {
            set.add(name)
        }
    }
    return [...set];
};

console.log(getFolderNames(["wano","wano","wano","wano"]))