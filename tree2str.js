var tree2str = function(root) {
    let str = process(root, '');
    console.log(str);
    return str;
};

function process(root, str) {
    if (!root) {
        return '';
    }
    
    str += root.val;
    if (root.left) {
        str += process(root.left, '(') + ')';
    } else if (!root.left && root.right) {
        str += '()';
    }
    if (root.right) {
        str += '(' + process(root.right, '') + ')';
    }
    
    return str;
}
tree2str([1,2,3,4]);