def power(a,b):
    c=1
    for i in range(1,b+1):
        c*=a
    return c

a= int(input())  
b= int(input()) 
print(power(a,b))