from django.urls import path, include
from rest_framework import routers
from horarios import views


router = routers.DefaultRouter()
router.register(r'horarios', views.HorarioView, 'horarios')

urlpatterns = [
    path("api/v1/", include(router.urls))
]