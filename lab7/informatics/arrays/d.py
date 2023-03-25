a=input().split(" ")
b=[]
for i in range(0, len(a)):
    b.append(int(a[i]))
#print(b)
d=0
c=0
for i in b:
    if i>d:
        c+=1
    d=i
print(c-1)