def big_diff(nums):
  nums.sort()
  return abs(nums[0]-nums[-1])