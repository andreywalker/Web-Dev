from django.conf import settings
from django.db import models
from django.utils import timezone


class Product(models.Model):
    name = models.CharField(max_length=200)
    price =models.FloatField()
    description=models.TextField()
    count=models.IntegerField()
    is_active=models.BooleanField()

    def __str__(self):
        return self.name
    
class Category(models.Model):
    name=models.CharField(max_length=200)
