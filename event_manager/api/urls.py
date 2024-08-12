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

  path('my_events/', views.my_events),
  path('my_events/create/', views.create_event),
  path('my_events/<str:event_id>/invitations/create', views.create_invitations),
  # path('invitations/', views.invitations),
  # path('invitations/<str:id>', views.invitations),
]