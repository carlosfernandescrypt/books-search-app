from rest_framework import viewsets, permissions
from .models import FavoriteBook
from .serializers import FavoriteBookSerializer

class FavoriteBookViewSet(viewsets.ModelViewSet):
    queryset = FavoriteBook.objects.all()
    serializer_class = FavoriteBookSerializer
    permission_classes = [permissions.AllowAny]
    
    # sobrescrever a função de atualização (patch ou PUT)
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
