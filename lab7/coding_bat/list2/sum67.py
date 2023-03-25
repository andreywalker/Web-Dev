def sum67(nums):
  sum = 0
  stop = False
  for i in nums:
    if i == 7 and stop:
      stop = False
      continue
    if stop:
      continue
    if i == 6:
      stop = True
      continue
    sum += i
  return sum