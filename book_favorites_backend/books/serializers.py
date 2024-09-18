from rest_framework import serializers
from .models import FavoriteBook

class FavoriteBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteBook
        fields = ['id', 'book_id', 'title', 'author', 'description', 'thumbnail', 'notes', 'rating', 'tags', 'favorited_at']