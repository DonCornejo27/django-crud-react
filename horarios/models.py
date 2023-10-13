from django.db import models

# Create your models here.

class Horario(models.Model):
    tabla = models.CharField(max_length=197, default='')

