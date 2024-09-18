from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FavoriteBookViewSet

router = DefaultRouter()
router.register(r'favorites', FavoriteBookViewSet, basename='favoritebook')

urlpatterns = [
    path('', include(router.urls)),
]
