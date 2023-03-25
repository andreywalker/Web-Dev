def cat_dog(str):
  cats = 0
  dogs = 0
  while str.find("cat") != -1 or str.find("dog") != -1:
    if str.find("cat") != -1:
      str = str.replace("cat", "",1)
      cats += 1
    if str.find("dog") != -1:
      str = str.replace("dog", "",1)
      dogs += 1
  return dogs == cats