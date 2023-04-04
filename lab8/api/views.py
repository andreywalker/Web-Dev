from django.shortcuts import render

from django.http import HttpResponse, JsonResponse
from .models import Product, Category




def product_list(request):
    products = Product.objects.all()
    products_json=[product.to_json() for product in products]
    
    return JsonResponse(products_json, safe=False)

def get_product(request,product_id):
    product=Product.objects.get(id=int(product_id))
    return JsonResponse(product.to_json(), safe=False)


def category_list(request):
    cats = Category.objects.all()
    cats_json=[cat.to_json() for cat in cats]
    
    return JsonResponse(cats_json, safe=False)

def get_category(request,category_id):
    cat=Category.objects.get(id=int(category_id))
    return JsonResponse(cat.to_json(), safe=False)

def get_products_of_category(request, cat_id):
    cat_name=Category.objects.get(id=int(cat_id)).name
    products=filter(lambda x: x.category==cat_name ,Product.objects.get_queryset())
    products_json=[product.to_json() for product in products]
    
    return JsonResponse(products_json, safe=False)

