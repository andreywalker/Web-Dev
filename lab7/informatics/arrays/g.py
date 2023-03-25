a=input().split(" ")
b=[]
for i in range(0, len(a)):
    b.append(int(a[i]))
#print(b)
b.reverse()
for i in b:
    print(i, end=" ")
