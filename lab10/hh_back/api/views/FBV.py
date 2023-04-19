from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


@api_view(['GET', 'POST'])
def all_companies(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)


@api_view(['GET', 'PUT', 'DELETE'])
def one_company(request, pk):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist:
        return Response({'message': "Company with such an id doesn't exist"}, status=404)
    if request.method == "GET":
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == "DELETE":
        company.delete()
        return Response({'deleted': True})


@api_view(['GET'])
def vacancies_by_company(request, pk):
    try:
        company = Company.objects.get(id=pk)
        vacancies = company.vacancies.all()
        serializer = VacancySerializer(vacancies, many=True)
    except Company.DoesNotExist:
        return Response({'message': "Company with such an id doesn't exist"}, status=404)
    if request.method == "GET":
        return Response(serializer.data)


@api_view(['GET', 'POST'])
def all_vacancies(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)


@api_view(['GET', 'PUT', 'DELETE'])
def one_vacancy(request, pk):
    try:
        vacancy = Vacancy.objects.get(id=pk)
    except Vacancy.DoesNotExist:
        return Response({'message': "Vacancy with such an id doesn't exist"}, status=404)
    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == "DELETE":
        vacancy.delete()
        return Response({'deleted': True})


@api_view(['GET'])
def top_ten(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
