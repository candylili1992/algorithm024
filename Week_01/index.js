/**
 * 两数之和
 */
var twoSum = function(nums,target){
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] === target - nums[j]) {
            return [i, j]
          }
        }
    }
}
/**
 * 删除排序数组中的重复项
 */
var removeDuplicates = function (nums) {
    var cur = nums[0];
    for (var i = 1; i < nums.length;) {
        if (nums[i] === cur)
            nums.splice(i, 1);
        else{
            cur = nums[i++];
        }
            
    }
    return nums.length
};