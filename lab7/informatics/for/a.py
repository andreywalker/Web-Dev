a=int(input())
b=0
for i in range(1,a+1):
    b+=i*i
print(b)


a=int(input())
b=int(input())

for i in range(a,b,2):
    print(i,end=" ")
