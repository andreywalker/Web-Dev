def caught_speeding(speed, is_birthday):
  speed -= (5 if is_birthday else 0)
  return 0 if speed <= 60 else 2 if speed >= 81 else 1