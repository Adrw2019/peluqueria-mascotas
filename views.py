from rest_framework import viewsets
from .models import Producto
from .serializers import ProductoSerializer



# Create your views here.
class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
  
