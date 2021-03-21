// 括号生成
var generateParenthesis = function(n) {
    let res = [];
    const dfs = (lremain,rremain,str) => {
       if(str.length === 2*n){
           res.push(str);
           return;
       }
       if(lremain > 0) {
           dfs(lremain-1,rremain,str+'(');
       };
       if(rremain > lremain){
          dfs(lremain,rremain-1,str+')')
       }
    };
    dfs(n,n,'');
    return res;
 };
 //最小基因变化
 var minMutation = function (start, end, bank) {
    let count = 0
    const validStr = ['A', 'C', 'G', 'T']
    const queue = []
    const visited = new Set()
    queue.push(start)
    visited.add(start)
    while (queue.length) {
      const len = queue.length
      for (let i = 0; i < len; i++) {
        const val = queue.shift()
        if (val === end) return count
        for (let j = 0; j < val.length; j++) {
          for (const c of validStr) {
            if (val[j] === c) continue
            const sequence = val.substring(0, j) + c + val.substring(j + 1)
            if (!bank.includes(sequence) || visited.has(sequence)) continue
            queue.push(sequence)
            visited.add(sequence)
          }
        }
      }
      count++
    }
    return -1
  }
  