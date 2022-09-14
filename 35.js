// 35. Search Insert Position
//You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    let left = 0;
    let right = nums.length-1;
    
    while (left < right) {
        let middle = Math.floor( (left+right)/2 );
        
        if(target > nums[middle]) {
            left = middle + 1;   
        } else if(target < nums[middle]) {
            right = middle - 1;   
        } else if (target == nums[middle]) {
            return middle;
        }
    }

    if(left === right && target > nums[left]) {
        return left+1;
    } else  {               //if (left === right && target < nums[left])
        return left;
    }
};