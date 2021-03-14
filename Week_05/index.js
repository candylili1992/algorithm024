// 最小路径和，暴力法
var minPathSum = function (grid) {
    let m = grid.length,
      n = grid[0] ? grid[0].length : 0
    if (m === 0 || n === 0) return 0
    let dp = Array.from({ length: m }, () => new Array(n).fill(Number.MAX_VALUE))
    // 起点
    dp[0][0] = grid[0][0]
    // 补齐首行路径和
    for (let i = 1; i < m; i++) {
      dp[i][0] = dp[i - 1][0] + grid[i][0]
    }
    // 补齐首列路径和
    for (let j = 1; j < n; j++) {
      dp[0][j] = dp[0][j - 1] + grid[0][j]
    }
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        // 从路径和较小的地方进入
        let itemMin = Math.min(dp[i - 1][j], dp[i][j - 1])
        dp[i][j] = Math.min(itemMin + grid[i][j], dp[i][j])
      }
    }
    return dp[m - 1][n - 1]
  }
//   优化版
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    for(var i = 0;i < grid.length;i++){
        for(var j = 0;j < grid[0].length;j++){
            if( i != 0 && j!= 0){
                grid[i][j] = Math.min(grid[i-1][j],grid[i][j-1])+grid[i][j];
            }else if(i == 0 && j!=0){
                grid[i][j] = grid[i][j-1]+grid[i][j];
            }else if(i != 0 && j==0){
                grid[i][j] = grid[i-1][j]+grid[i][j];
            }else if(i == 0 && j==0){
                continue;
            }
        }
    }
    return grid[grid.length-1][grid[0].length-1];
};
// 回文子串
const countSubstrings = (s) => {
    const len = s.length;
    let count = 0;
    const dp = new Array(len);
  
    for (let j = 0; j < len; j++) {
      for (let i = 0; i <= j; i++) {
        if (s[i] == s[j] && (j - i <= 1 || dp[i + 1])) {
          dp[i] = true;
          count++;
        } else {
          dp[i] = false;
        }
      }
    }
    return count;
  };
 