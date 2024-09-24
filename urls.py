from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductoViewSet

router = DefaultRouter()
router.register(r'productos', ProductoViewSet)

urlpatterns = [
    path('api/', include(router.urls)),  # Rutas de la API
    path('productos/', ProductoViewSet.as_view({'get': 'list', 'post': 'create'}), name='productos'),
]

