from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Company
from .models import Vacancy

def companies_list(request):
    comps = Company.objects.all()
    comps_json=[comp.to_json() for comp in comps]
    
    return JsonResponse(comps_json, safe=False)

def get_company(request,comp_id):
    comp=Company.objects.get(id=int(comp_id))
    return JsonResponse(comp.to_json(), safe=False)


def vacancies_list(request):
    vacs = Vacancy.objects.all()
    vacs_json=[vac.to_json() for vac in vacs]
    
    return JsonResponse(vacs_json, safe=False)

def get_vacancy(request,vac_id):
    vac=Vacancy.objects.get(id=int(vac_id))
    return JsonResponse(vac.to_json(), safe=False)

def get_vacancies_of_company(request, comp_id):
    vacs=Vacancy.objects.get(company=int(comp_id))
    vacs_json=[vac.to_json() for vac in vacs]
    
    return JsonResponse(vacs_json, safe=False)


def get_top_ten(request, comp_id):
    vacs=Vacancy.objects.all(company=int(comp_id)).order_by('salary')[:10]
    vacs_json=[vac.to_json() for vac in vacs]
    
    return JsonResponse(vacs_json, safe=False)


