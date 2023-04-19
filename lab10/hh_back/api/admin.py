from django.contrib import admin
from api.models import Company, Vacancy


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'city', 'address')


@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'salary', 'company')
    list_filter = ['company']
