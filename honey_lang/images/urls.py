from django.urls import path
from . import views


app_name = "images"

urlpatterns = [
    path(
        'images/', 
        views.Images.as_view(),
        name='feed'
    ),
    path(
        '<int:image_id>/likes/',
        views.LikeImage.as_view(),
        name='like_image'
    ),
    path(
        '<int:image_id>/unlikes/',
        views.UnLikeImage.as_view(),
        name='unlike_image'
    ),
]
