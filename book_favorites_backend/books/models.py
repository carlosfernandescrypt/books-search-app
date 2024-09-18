from django.db import models
from django.contrib.auth.models import User

class FavoriteBook(models.Model):
    book_id = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.TextField()
    thumbnail = models.URLField(blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    rating = models.IntegerField(default=0)
    tags = models.CharField(max_length=255, blank=True, null=True)
    favorited_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
