a=int(input())
b=int(input())
if a<10:
    if a==b:
        print("YES")
    else:
        print("NO")
elif a<100:
    if a//10==a%10:
        if b==-1:
            print("YES")
        else:
            print("NO")
    else:
        if a==b:
            print("YES")
        else:
            print("NO")
elif a<1000:
    if a//100==a%10:
        if b==-1:
            print("YES")
        else:
            print("NO")
    else:
        if a==b:
            print("YES")
        else:
            print("NO")
elif a<10000:
    if a//1000==a%10 and a//100==(a%100)//10:
        if b==-1:
            print("YES")
        else:
            print("NO")
    else:
        if a==b:
            print("YES")
        else:
            print("NO")
    