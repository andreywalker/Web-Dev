def is_leap(y):
    if y%4==0 and y%100!=0:
        return True
    elif y%100==0 and y%400!=0:
        return False
    elif y%400==0:
        return True
    else:
        return False
a=int(input())
print(is_leap(a))