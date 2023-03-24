a= int(input())
c=0
for i in range(2,a//2):
    if a%i==0:
        c=i
        break
print(c)