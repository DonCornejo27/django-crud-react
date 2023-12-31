from rest_framework import serializers
from .models import Horario

class HorarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horario
        fields = ('id', 'horarioDiurno', 'horarioVespertino')