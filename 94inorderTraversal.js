             1
       2           3
    4   null   null   5    
null 6            null  8   

[1,2,3,4,null,null,5,null,6,null,8]


//use in leetcode

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let result = [];
    inorder(root);
    
    function inorder(root)
    {
        if(root){
            inorder(root.left);
            inorder(root.right);
        }
        
        result.push(root.val);    
         
         
    }
    
    return result;
    
};