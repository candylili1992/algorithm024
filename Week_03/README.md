学习笔记
前序知识回顾：
树的面试题解法一般都是递归，主要原因有两方面
1：节点的定义
2：重复性（自相似性）
二叉搜索树：左子树都要小于根节点，右子树都要大于根节点
且左右子树具有相似的特征，（左右子树也是二叉搜索树）
递归recursion：本质是循环
代码模版分为四步
1：递归终结条件，如果不写会造成无限递归或者死循环
2：处理当前层逻辑 
3: 下探到下一层
4：清理当前层
const recursion = (level,params) = >{
//recursion terminator
if(level > MAX_LEVEL){
process_result
return 
}
//process current level
process(level,params);
// drill down
recursion (level+1,params);
//reverse the current level status if needs
}
注意点
1：抵制人肉递归
2：找最近重复子问题
3：数学归纳法思维

习题部分：
习题 1:爬楼梯
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。
/**
 * @param {number} n
 * @return {number}
 */
// 方法一：利用斐波那契数列
// 思路，先构造数组，第一项为1，第2项为1，第三项f(3) = f(2)+f(1),...以此类推
//f(n)=f(n-2)+f(n-1),利用循环
//时间复杂度o(n),空间复杂度o(n)
//注意点：循环中i从第二项开始

var climbStairs = function(n) {
   const dp = [];
   dp[0] = 1;
   dp[1] = 1;
   for(let i = 2;i < n+1;i++){
       dp[i] = dp[i-2]+dp[i-1]
   };
   return dp[n]

};

/**
 * 方法二
 * 思路：利用缓存中间值，压缩空间优化，dp[i] 只与过去的两项：dp[i-1] 和 dp[i-2] 有关，没必要存下所有的dp项，当前项只关注于上两次的和上一次的，利用临时变量缓存上一次的，更新本次的为上一次的+上两次的，更新prev
 */
//时间复杂度为o(n),空间复杂度为o(1)
var climbStairs = function(n) {
   let prev = 1;
   let cur = 1;
   for(let i = 2;i< n+1;i++){
       const temp = cur;//临时变量缓存上一次的
       cur = prev + temp ;//本次的等于上一次的+上两次的
       prev = temp;//prev 更新为上一次的cur

   }
   return cur

};

 习题2:括号生成
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。 
https://leetcode-cn.com/problems/generate-parentheses/
方法一：利用回溯法进行解题
满足两个条件
1：加入左括号的条件是当前是否还有（进行选择
2：加入右括号的条件是右括号的剩余数量大于左括号的剩余数量
分为三步，不合法的提前结束，到达结束条件的，以及选择左括号还是右括号
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
   const res = [];
   const dfs = (left,right,str) => {
        if(str.length == 2*n){
            return res.push(str);
        };
        if(left > 0){
            dfs(left-1,right,str+"(")
        };
        if(right > left){
            dfs(left,right-1,str+")")
        }
   };
   dfs(n,n,"");
   return res;
};
习题3:反转一颗二叉树
输入：

     4                  
   /   \
  2     7
 / \   / \
1   3 6   9
输出：
     4
   /   \
  7     2
 / \   / \
9   6 3   1
https://leetcode-cn.com/problems/invert-binary-tree/

思路：交换一下左右节点，然后再递归的交换左节点右节点
终止条件：当前节点为 null 时返回
 时间复杂度：每个元素都必须访问一次，所以是 O(n)O(n)
空间复杂度：最坏的情况下，需要存放 O(h)O(h) 个函数调用(h是树的高度)，所以是 O(h)O(h)
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
   if(root == null){
       return null;
   };
   let temp = root.left;
   root.left = root.right;
   root.right = temp;
   invertTree(root.left);
   invertTree(root.right);
   return root;
};
这道题目使用前序遍历和后序遍历都可以，唯独中序遍历不行，因为中序遍历会把某些节点的左右孩子翻转了两次！建议拿纸画一画，就理解了，
那么层序遍历可以不可以呢？依然可以的！只要把每一个节点的左右孩子翻转一下的遍历方式都是可以的！

习题四：
 验证二叉搜索树
https://leetcode-cn.com/problems/validate-binary-search-tree/
思路：首先二叉搜索树的定义是：
左子树小于根，右子树大于根，同时左子树和右子树自身也必须是二叉搜索树
方法一思路：中序遍历升序思维
var isValidBST = function(root) {
   let res = [];
   const recursion = (root) => {
      if(!root){
          return null;
      }                   
      recursion(root.left);
      res.push(root.val);
      recursion(root.right)
   };
   recursion(root);
   for(let i = 0;i< res.length;i++){
       if((res[i]>res[i+1] || res[i] === res[i+1])){
           return false;
       }
   };
   return true
   
};
习题五：
二叉树的最大深度
https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
思路：一个树的最大深度 = 根节点的高度（就是1）+ 左右子树的最大深度中的较大者。
递归分别计算出左子树和右子树的高度，取其中度最大值加一即可
时间复杂度：O(n)
空间复杂度
最坏情况下 O(n) 退化为单链表
最好情况下 O(logn) 为平衡二叉树且高度为logn
var maxDepth = function(root) {
    if(!root){
        return 0;
    }
   let left = maxDepth(root.left);
   let right = maxDepth(root.right);
   return Math.max(left,right)+1;
};
习题六：
二叉树的最小深度
https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
解题思路：
另外这道题的关键是搞清楚递归结束条件
叶子节点的定义是左孩子和右孩子都为 null 时叫做叶子节点
当 root 节点左右孩子都为空时，返回 1
当 root 节点左右孩子有一个为空时，返回不为空的孩子节点的深度
当 root 节点左右孩子都不为空时，返回左右孩子较小深度的节点值

var minDepth = function(root) {
   if(!root){
       return 0;
   };
   let left = minDepth(root.left);
   let right = minDepth(root.right);
   if(!root.left){
       return right+1;
   }else if(!root.right){
       return left+1;
   }else if(root.left && root.right){
     return Math.min(left,right)+1
   }else{
       return 1
   }
习题六：二叉树的序列化与反序列化
https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
习题七：Pow(x, n)
https://leetcode-cn.com/problems/powx-n/
思路：
*stpe1:
 * 2^10 -> (2^5)(2^5) 
 * 2^5->(2^2)(2^2)*2
 * 2^2->(2^1)(2^1)
 * =>由此得出
 * pow(x,n)
 * subproblem:
 * subresult = pow(x,n/2);
 * =>merge
 * //odd
 * result = subresult*subresult*x
 * //even
 * result = subresult*subresult
 * 

var myPow = function(x, n) {
   if(n<0){
       n=-n;
       x=1/x
   };
   return dfs(x,n);
   function dfs(x,n){
       if(n== 0){
           return 1
       };
       if(n==1){
           return x
       };
       let res = 1;
       if(n%2){
           res = dfs(x,(n-1)/2)
       }else{
           res = dfs(x,n/2);
       };
       return n%2 ? res*res*x : res*res
   }
};
习题七：子集
https://leetcode-cn.com/problems/subsets/
var subsets = function(nums) {
  let result = [[]];
  for(let i = 0;i<nums.length;i++){
      let length = result.length;
      for(let j = 0;j<length;j++){
          result.push([...result[j],nums[i]])
      }
  };
  return result;
  
};
习题七：
多数元素
https://leetcode-cn.com/problems/majority-element/
var majorityElement = function(nums) {
   let obj = {};
   let judge = nums.length/2;
   for(let i = 0;i<nums.length;i++){
       if(!obj[nums[i]]){
          obj[nums[i]] = 1;
          if(obj[nums[i]] > judge){
               return nums[i]
           }
       }else{
           obj[nums[i]] = obj[nums[i]]+1;
           if(obj[nums[i]] > judge){
               return nums[i]
           }
       }
       
   };