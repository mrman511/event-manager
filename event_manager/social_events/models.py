from django.db import models

import uuid
from django.db import models
from users.models import CustomUser

class Event(models.Model):
  id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False);
  _total_confirmed = models.IntegerField(default=0)
  _total_attending = models.IntegerField(default=0)
  title = models.CharField(max_length=100, null=True, blank=True)
  host = models.ForeignKey(CustomUser, related_name='host', on_delete=models.CASCADE, blank=True, null=True )
  address = models.CharField(max_length=500, null=True, blank=True)
  start = models.DateTimeField(null=True, blank=True)
  end = models.DateTimeField(null=True, blank=True)
  tag_line = models.CharField(max_length=150, null=True, blank=True)
  description = models.CharField(max_length=1500, null=True, blank=True)
  postscript = models.CharField(max_length=150, null=True, blank=True)
  # invitation=models.FileField(null=True, blank=True)
  # event_admin=models.ManyToManyField(CustomUser, related_name='event_admin')

class Invitation(models.Model):
  id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False);
  event=models.ForeignKey(Event, on_delete=models.CASCADE, null=True, blank=True)
  invitee = models.OneToOneField(CustomUser, related_name='invitee', on_delete=models.CASCADE, null=True, blank=True)
  inviter = models.ForeignKey(CustomUser, related_name='inviter', on_delete=models.CASCADE, null=True, blank=True)
  confirmed = models.BooleanField(default=False)
  attending = models.BooleanField(default=False)

# class Guest(models.Model):
#   guest = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
#   guest_of = models.ForeignKey(Invitation, on_delete=models.CASCADE, null=True, blank=True)