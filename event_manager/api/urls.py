from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
  TokenObtainPairView,
  TokenRefreshView,
)

urlpatterns=[
  path('', views.routes),

  path('users/', views.users),
  # path('users/reset_password/', views.reset_password),
  # path('users/reset_password/<str:encoded_pk>/<str:token>/', views.reset_password),
  path('users/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('users/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

  # path('events/', views.events),
  # path('events/<str:id>', views.events),
  # path('invitations/', views.invitations),
  # path('invitations/<str:id>', views.invitations),
]