from django.urls import path
from . import views


app_name = "users"
urlpatterns = [
    path(
        'explore/', 
        views.ExploreUsers.as_view(),
        name='explore_users'
    ),
    path(
        '<int:user_id>/follow/',
        views.FollowUser.as_view(),
        name='follow_user'
    ),
    path(
        '<int:user_id>/unfollow/',
        views.UnFollowUser.as_view(),
        name='unfollow_user'
    ),
    path(
        '<str:username>/followers/',
        views.UserFollowers.as_view(),
        name='user_followers'
    ),
    path(
        '<str:username>/following/',
        views.UserFollowing.as_view(),
        name='user_following'
    ),
    path(
        'search/',
        views.Search.as_view(),
        name='user_search'
    ),
    path(
        "login/facebook/",
        view=views.FacebookLogin.as_view(),
        name='fb_login'
    ),
    path("~redirect/", view=views.user_redirect_view, name="redirect"),
    path("~update/", view=views.user_update_view, name="update"),
    path("<str:username>/", view=views.user_detail_view, name="detail"),

]
