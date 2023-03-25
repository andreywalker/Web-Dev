def close_far(a, b, c):
  return (abs(a-b) <= 1 or abs(a-c)<=1) and (abs(a-b)>=2 and abs(b-c)>=2 or abs(b-c)>=2 and abs(a-c)>=2)