n=int(input())
a=input().split(" ")
b=[]
for i in range(0, len(a)):
    b.append(int(a[i]))
#print(b)
b.sort()
b=list(set(b))
b.reverse()

print(b[1])