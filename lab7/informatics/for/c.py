import math
a=int(input())
b=int(input())

for i in range(a,b):
    if math.sqrt(i)-int(math.sqrt(i))==0:
        print(i, end=" ")

