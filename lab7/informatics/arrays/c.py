a=input().split(" ")
b=[]
for i in range(0, len(a)):
    b.append(int(a[i]))
#print(b)
c=0
for i in b:
    if i>0:
        c+=1
print(c)