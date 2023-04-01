/**
 * 10:07
 * @param {} val 
 * @param {*} left 
 * @param {*} right 
 */
function Node(val, lvl, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
    this.lvl = lvl;
}
      
var findDuplicateSubtrees = function(root) {
    let tree = createTree(root);
    dfs(root, []);

    
};
function dfs(root, list) {

    if(root.left === null && root.right === null) {
        return;
    }
    if(root.left) {
        list.push(root.val);
        dfs(root.left);
    }
    if(root.right) {
        list.push(root.val);
        dfs(root.right);
    }
}


const createTree = (arr) => { // 创建二叉树
    let tree = new Node(arr[0]);
    let Nodes = [tree];
    let i = 1;
    for (let node of Nodes){
        Nodes.push(node.left = new Node (arr[i]));
        i += 1;
        if (i == arr.length) return tree;
        Nodes.push(node.right = new Node(arr[i]));
        i += 1;
        if (i == arr.length) return tree;
    }
};

console.log(findDuplicateSubtrees([1,2,3,4,null,2,4,null,null,4]));