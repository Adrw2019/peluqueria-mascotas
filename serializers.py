from rest_framework import serializers
from .models import Producto  # Importa los modelos necesarios



class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ['id', 'nombre', 'descripcion', 'precio', 'stock']
