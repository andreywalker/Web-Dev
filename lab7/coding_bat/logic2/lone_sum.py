def lone_sum(a, b, c):
  sum = 0; sum += a if a != b and a != c else 0
  sum += b if b!= a and b!=c else 0
  sum += c if c!= a and c!=b else 0
  return sum