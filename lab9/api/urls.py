from django.urls import path
from api import views

urlpatterns=[
    path('companies/', views.companies_list),
    path('companies/<int:id>/', views.get_company),
    path('companies/<int:id>/vacancies/', views.get_vacancies_of_company),
    path('vacancies/', views.vacancies_list),
    path('vacancies/<int:id>/', views.get_vacancy),
    path('vacancies/top_ten/', views.get_top_ten),
]