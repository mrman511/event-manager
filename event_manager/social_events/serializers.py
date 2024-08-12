from rest_framework import serializers

from .models import Event, Invitation
# from users.models import CustomUser

class EventSerializer(serializers.ModelSerializer):
  class Meta:
    model=Event
    exclude=['_total_attending', '_total_confirmed']

  # def create(self, validated_data, host):
  #   validated_data['host'] = host
  #   return validated_data
  

class InvitationSerializer(serializers.ModelSerializer):
  class Meta:
    model=Invitation
    fields="__all__"

# class GuestSerializer(serializers.ModelSerializer):
#   class Meta:
#     model=Guest
#     fields="__all__"