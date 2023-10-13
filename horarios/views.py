from rest_framework import viewsets
from .serializer import HorarioSerializer
from .models import Horario

# Create your views here.
class HorarioView(viewsets.ModelViewSet):
    serializer_class = HorarioSerializer
    queryset = Horario.objects.all()