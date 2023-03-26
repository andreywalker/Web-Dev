def round_sum(a, b, c):
  return sum([round10(i) for i in [a,b,c]])

def round10(num):
  return 10* (num//10) + (10 if num%10 >=5 else 0)