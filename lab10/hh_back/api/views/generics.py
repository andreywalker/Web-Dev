from rest_framework import generics
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


class all_companies(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class one_company(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_url_kwarg = 'pk'


class vacancies_by_company(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_url_kwarg = 'pk'

    def get_queryset(self):
        return super().get_queryset().filter(
            company_id=self.kwargs['pk']
        )


class all_vacancies(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class one_vacancy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_url_kwarg = 'pk'


class top_ten(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer

