def same_first_last(nums):
  try:
    return nums[0] == nums[-1]
  except:
    return nums != []