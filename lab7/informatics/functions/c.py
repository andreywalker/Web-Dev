def xor(a,b):
    if a==b:
        return 0
    else:
        return 1
a=int(input())
b=int(input())
if a==1:
    a=True
else:
    a= False
if b==1:
    b=True
else:
    b=False
print(xor(a,b))