a=input().split(" ")
b=[]
for i in range(0, len(a)):
    b.append(int(a[i]))
#print(b)
d=0
for i in b:
    if (i>0 and d>0) or (i<0 and d<0):
        print("YES")
        quit()
    d=i

print("NO")