def count_hi(str):
  cnt = 0
  is_h = False
  for i in str:
    if i == "h": is_h = True
    elif i == "i" and is_h: 
      cnt += 1
      is_h = False
    else:
      is_h = False
  return cnt