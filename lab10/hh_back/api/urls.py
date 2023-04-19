from django.urls import path
from api import views

# urlpatterns = [
#     path('companies/', views.all_companies),  # List of all Companies
#     path('companies/<int:pk>/', views.one_company),  # Get one Company
#     path('companies/<int:pk>/vacancies/', views.vacancies_by_company),  # List of Vacancies by Company
#     path('vacancies/', views.all_vacancies),  # List of all Vacancies
#     path('vacancies/<int:pk>/', views.one_vacancy),  # Get one Vacancy
#     path('vacancies/top_ten/', views.top_ten)  # List of top 10 vacancies sorted by decreasing salary
# ]

urlpatterns = [
     path('companies/', views.all_companies.as_view()),  # List of all Companies
     path('companies/<int:pk>/', views.one_company.as_view()),  # Get one Company
     path('companies/<int:pk>/vacancies/', views.vacancies_by_company.as_view()),  # List of Vacancies by Company
     path('vacancies/', views.all_vacancies.as_view()),  # List of all Vacancies
     path('vacancies/<int:pk>/', views.one_vacancy.as_view()),  # Get one Vacancy
     path('vacancies/top_ten/', views.top_ten.as_view())  # List of top 10 vacancies sorted by decreasing salary
]
