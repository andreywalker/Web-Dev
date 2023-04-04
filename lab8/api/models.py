from django.conf import settings
from django.db import models
from django.utils import timezone


class Product(models.Model):
    name = models.CharField(max_length=200)
    price =models.FloatField()
    description=models.TextField()
    category=models.CharField(max_length=200, default='Food')
    count=models.IntegerField()
    is_active=models.BooleanField()

    def __str__(self):
        return self.name
    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,
            'price' : self.price,
            'description' : self.description,
            'category': self.category,
            'count' : self.count,
            'is_active' : self.is_active
        }
    
class Category(models.Model):
    name=models.CharField(max_length=200)
    def to_json(self):
        return {
            'id':self.id,
            'name':self.name
        }
