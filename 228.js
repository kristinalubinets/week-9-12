//228. Summary Ranges
/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
     
    let ranges = [];
    let temp = 0;
    
    for(let i = 0; i < nums.length; i++) {
        
        if(nums[i+1] !== nums[i]+1) {
            if(i === 0) {
                ranges.push(`${nums[i]}`);
            }else if(nums[i-1] !== nums[i]-1) {
                ranges.push(`${nums[i]}`)
            }else 
                ranges.push(`${nums[i]-temp}->${nums[i]}`);
                temp = 0;
            
        } else {
            temp++;
        }
    }
    return ranges;
};