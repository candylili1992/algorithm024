// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 方法一
// 利用数组的sort 方法，先将字符串转化成数组，然后排序之后在转化成字符串

var isAnagram = function(s, t) {
    let s1 = s.split('').sort().join('');
    let t1 = t.split('').sort().join('');
    return s1 == t1
};

// 方法二
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    let sMap = {};
    let flag = true;
    s.split('').forEach(function(item,index){
        sMap[item]?(sMap[item]++):(sMap[item] = 1);
    })
    let tArr = t.split('');
    for(let i = 0,len = tArr.length;i<len;i++){
        if(sMap[tArr[i]]&&sMap[tArr[i]]>0){
            sMap[tArr[i]]--;
        }else{
            flag = !flag;
            break;
        }
    }
    return flag;
};

// 2:两数之和
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
// 你可以按任意顺序返回答案。

//方法一：
var twoSum = function (nums,target){
    for(let i =0;i<nums.length;i++){
        let dis = target - nums[i];
        if(nums.indexOf(dis) !== -1 && nums.indexOf(dis) !== i){
            let j = nums.indexOf(dis);
            return [i,j]
        }
    }
}
// 方法二
var twoSum = function(nums, target) {
    let targetMap = {}
    for (let i = 0; i < nums.length; i++) {
      let key = target - nums[i]
      if (targetMap[key] || targetMap[key] === 0) {
        return [targetMap[key], i]
      }
      targetMap[nums[i]] = i
    }
  }

//3:给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
var groupAnagrams = function(strs) {
    let hash = {};
    let result = [];
    strs.forEach(item=>{
        let key = Array.prototype.sort.call(item.split('')).join();
        if(!hash.hasOwnProperty(key)){
            hash[key] = result.length;
            result.push([item]);
        }else{
            result[hash[key]].push(item);
        }
    });
    return result;
};

