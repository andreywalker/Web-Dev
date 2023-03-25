def sum13(nums):
  sum = 0
  is_13 = False
  for i in nums:
    if is_13:
      is_13 = False
      continue
    if i == 13:
      is_13 = True
      continue
    sum += i
  return sum