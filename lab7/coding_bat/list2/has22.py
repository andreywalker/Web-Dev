def has22(nums):
  is_2 = False
  for i in nums:
    if i == 2 and is_2:
      return True
    elif i == 2:
      is_2 = True
    else:
      is_2 = False
  return False