from django.db import models

# Create your models here.


class Film(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField()
    image = models.ImageField(upload_to='images/%Y/%m/%d', blank=True)