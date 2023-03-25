def min(a,b,c,d):
    if (a<b and a<c and a<d) or (a<b and a==c and a<d) or (a<b and a<c and a==d) or (a==b and a<c and a<d) or (a<b and a==c and a==d) or (a==b and a==c and a<d) or (a==b and a<c and a==d):
        return a
    elif (b<a and b<c and b<d) or (b<a and b==c and b<d) or (b<a and b<c and b==d) or (a==b and b<c and b<d) or (b<a and b==c and b==d) or (a==b and b==c and b<d) or (a==b and b<c and b==d):
        return b
    elif (c<b and c<a and c<d) or (c<b and a==c and c<d) or (c<b and c<a and c==d) or (c==b and c<a and c<d) or (c<b and a==c and c==d) or (c==b and a==c and c<d) or (c==b and c<a and c==d):
        return c
    else:
        return d

a= int(input())  
b= int(input())  
c= int(input())  
d= int(input())  
print(min(a,b,c,d))