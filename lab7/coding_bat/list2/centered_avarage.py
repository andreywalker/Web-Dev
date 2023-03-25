def centered_average(nums):
  nums.sort()
  return (nums[(len(nums)-1)//2] + nums[len(nums)//2 + (1 if 0<(len(nums)-1)/2%1<1 else 0)])/2