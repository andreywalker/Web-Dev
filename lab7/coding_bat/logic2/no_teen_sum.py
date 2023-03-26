def no_teen_sum(a, b, c):
  return sum([(i if not fix_teen(i) else 0) for i in [a,b,c]])

def fix_teen(num):
  return 13<=num<=19 and num not in (15,16)