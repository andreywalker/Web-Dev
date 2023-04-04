from django.shortcuts import render

from django.http import HttpResponse
from .models import Product



def product_list(request):
    products = list(Product.objects.get())
    
    s="<p>"
    for i in products:
        s=s+(i.name+' : '+i.description)
        
    s=s+"</p>"
    
    return HttpResponse(s)
