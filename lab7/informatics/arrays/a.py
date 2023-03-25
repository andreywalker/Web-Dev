a=input().split(" ")
b=[]
for i in range(0, len(a)):
    b.append(int(a[i]))
#print(b)
for i in range(0,len(b)):
    if i%2==0:
        print(b[i], end=" ")
