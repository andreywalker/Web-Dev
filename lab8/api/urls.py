from django.urls import path
from api import views

urlpatterns=[
    path('products/', views.product_list),
    path('products/<int:product_id>/', views.get_product),
    path('categories/', views.category_list),
    path('categories/<int:category_id>/', views.get_category),
    path('categories/<int:cat_id>/products/', views.get_products_of_category),
]