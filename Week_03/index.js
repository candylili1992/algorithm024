//1：二叉树的最近公共祖先
// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root == p || root == q){
        return root;
    };
    let left = lowestCommonAncestor(root.left,p,q);
    let right = lowestCommonAncestor(root.right,p,q);
    if(!left && !right){
       return null;
    }
    if(left && right){
        return root;
    };
    return !left ? right : left
};
//根据一棵树的前序遍历与中序遍历构造二叉树。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length){
        return null;
    };
    let index = preorder[0];
    let node = new TreeNode(preorder[0]);
    let mid = inorder.indexOf(index);
    let preLeft = preorder.slice(1,mid+1);
    let preRight = preorder.slice(mid+1);
    let inLeft = inorder.slice(0,mid);
    let inRight = inorder.slice(mid+1);
    node.left = buildTree(preLeft,inLeft);
    node.right = buildTree(preRight,inRight);
    return node
 };