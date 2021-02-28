学习笔记

##### 深度优先搜索和广度优先搜索的特性
##### 对于节点的访问顺序不同分为深度优先，广度优先
>##### 深度优先搜索的代码模版，一般使用递归或者栈
>##### 递归终止条件 -> 处理当前层 -> 下转 （如果是二叉树的话一般为左孩子，右孩子，如果是图的话就是联通的相邻节点，如果是多叉树的话，就是children，把所有的children遍历一次）
>##### 深度优先的 代码模版：
```
 const visited = new Set()
 const dfs = node => {  
    if (visited.has(node)) return  
    visited.add(node)  
    dfs(node.left)  
    dfs(node.right)
}
```
>##### 广度优先遍历，使用队列
代码模版
```
const bfs = (root) => {  
    let result = [],
    queue = [root]
     while (queue.length > 0) {    
        let level = [], n = queue.length    
        for (let i = 0; i < n; i++) {      
            let node = queue.pop()      
            level.push(node.val)      
             if (node.left) 
             queue.unshift(node.left)      
             if (node.right) 
             queue.unshift(node.right)    
        }    
        result.push(level)  
    }  
    return result
};
```
##### 贪心算法
##### 定义：是一种在每一步选择中都采取当下状态最好或者最优的选择，从而想要达到结果是全局最优的
与动态规划不同的是对于每个子问题，解决方案都要做出选择，不能回退
动态规划则会保存以前的计算结果，根据以前结果对当前进行选择，有回退
贪心：当下做最优判断
回溯：能够回退
动态规划：最优判断+回退

### 二分查找
#### 最为关键的三个前提条件，1:目标函数单调性，单调递增或者递减 2:存在上下界 3:能够通过索引访问
##### 正因为他是有序的，所以可以通过他的某些特征排除掉前半部分和后半部分
```
let left = 0, 
right = len(array) - 1
while (left <= right) {  
    let mid = (left + right) >> 1 
    if (array[mid] === target) { 
        /*find the target*/; return 
    }  else if (array[mid] < target) 
    left = mid + 1  
    else right = mid - 1
}
```