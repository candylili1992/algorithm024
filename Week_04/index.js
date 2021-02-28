// 1:柠檬水找零
var lemonadeChange = function(bills) {
    //20 找15，5+5+5 或者 10+5
    //10 找 5 ，5
    //5 的时候不用找
    let five = 0;ten = 0;
    for(let i = 0;i<bills.length;i++){
        if(bills[i] == 5){
            five ++;
        }else if(bills[i] == 10){
            ten ++ ;
            five--;
            if(five < 0){
                return false;
            }
        }else{
            //20
            if(ten > 0){
                 ten --;
                 five --;
                 if(five < 0){
                     return false;
                 }
            }else{
                 five = five -3;
                 if(five < 0){
                    return false;
                 };
 
            }
            
        }
    };
    return true;
 };

 //2:买卖股票的最佳时机 II
 var maxProfit = function (prices) {
    let res = 0;
    for(let i = 0;i<prices.length;i++){
        if(prices[i+1]>prices[i]){
            let diff = prices[i+1]-prices[i];
            res = res +diff;
        }
    };
    return res;
};
//3:分发饼干
// 方法一：暴力求解，双层循环，时间复杂度较高为o(n^2)
var findContentChildren = function(g, s) {
     g=g.sort((a,b)=>{
         return a-b
     });
     s=s.sort((a,b)=>{
         return a-b
     });
     count = 0;
     for(let i = 0;i<g.length;i++){
         let curr = g[i];
         for(let j=0;j<s.length;j++){
             if(s[j] > curr || s[j] === curr){
                 count ++;
                 s.splice(j,1);
                 break;
             }
         }
     };
     return count;
};
// 方法二：
var findContentChildren = function(g, s) {
     g.sort((a,b)=>{a-b
     });
     s.sort((a,b)=>{
         a-b
     });
     let count = 0;
     
         for(let i=0;i<s.length;i++){
             if(s[i] >= g[count]){
                 count= count +1;
             }
            if (count === s.length){return count};
         }
         
     return count;
};
//4:岛屿数量
// 思路：深度优先搜索，判断边界，如果遇到土地，岛屿数量加一，遍历前后左右为土地的都置于0，
//避免重复计算
var numIslands = function(grid) {
    let count = 0;
    const dfs = (i,j,grid) => {
         if(i < 0 || i > grid.length-1 || j < 0 || j > grid[0].length-1){
             return;
         }
         if(grid[i][j] === '0'){
             return;
         };
         grid[i][j] = '0';
         dfs(i-1,j,grid);
         dfs(i+1,j,grid);
         dfs(i,j-1,grid);
         dfs(i,j+1,grid);
    };
    for(let i = 0;i<grid.length;i++){
        let col = grid[0].length;
        for(let j = 0;j<col;j++){
            if(grid[i][j] === '1'){
                count = count+1;
                dfs(i,j,grid)
            }
        }
    };
    return count;
 };
//  5:跳跃游戏
// 思路：当前节点i,最大起跳距离S == nums[i] + i，如果最大距离连下一步都到不了，
//则直接返回false
var canJump = function(nums) {
    let max = 0;
    let len = nums.length;
    for(let i = 0;i<len;i++){
        if(i > max){
            return false;
        };
        max = Math.max(max,i+nums[i]);
    };
    return true;
 };

