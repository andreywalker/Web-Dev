from django.urls import path
from api import views

urlpatterns=[
    path('products/', views.product_list),
]