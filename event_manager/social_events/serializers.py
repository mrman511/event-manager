from rest_framework import serializers

from .models import Event
# , Invitation, Guest
# from users.models import CustomUser

class EventSerializer(serializers.ModelSerializer):
  class Meta:
    model=Event
    exclude=['_total_attending', '_total_confirmed']

# class InvitationSerializer(serializers.ModelSerializer):
#   class Meta:
#     model=Invitation
#     fields="__all__"

# class GuestSerializer(serializers.ModelSerializer):
#   class Meta:
#     model=Guest
#     fields="__all__"