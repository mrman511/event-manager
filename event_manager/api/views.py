# from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from users.models import CustomUser
from users.serializers import CustomUserSerializer
# from social_events.models import Event, Invitation, Guest
# from social_events.serializers import EventSerializer, InvitationSerializer, GuestSerializer

# Create your views here.
@api_view(['GET'])
def routes(request):
  routes = {
    'routes': { 'GET': 'api/' }
  }
  users=CustomUser.objects.all()
  return Response(routes)

@api_view(['GET', 'POST'])
def users(request):
  users = CustomUser.objects.all()
  serializer = CustomUserSerializer(users, many=True)

# @api_view(['GET', 'POST'])
# def singleUser(request, id=None):
#   if request.method == 'POST':
#     serializer=CustomUserSerializer(data=request.data)

#     if serializer.is_valid():
#       serializer.save()

#   if id is not None:
#     user = CustomUser.objects.get(id)
#     serializer = CustomUserSerializer(user, many=False)
#     return Response(serializer.data)

# @api_view(['GET', 'POST'])
# def events(request, id=None):
#   user=request.user

#   if request.method == 'POST':
#     serializer=EventSerializer(data=request.data,)
#     if serializer.is_valid():
#       serializer.save()
#       return Response({'message': 'Event created'}, status.HTTP_201_CREATED)
#     return Response({'message': 'Event not valid'}, status.HTTP_400_BAD_REQUEST)

#   if id is not None:
#     event = Event.objects.get(id)
#     can_view=False
#     try:
#       event.invitation_set.get(invited_user=user)
#       can_view=True
#     except:
#       if event.host==user:
#         can_view=True
#     if can_view:
#       serializer=EventSerializer(event, many=False)
#       return Response(serializer.data)
#     return Response({'message': 'You do not have permission to view this Event'}, status=status.HTTP_401_UNAUTHORIZED)

#   try:
#     events = Event.objects.filter(invitation__invited_user=user),
#     serializer=EventSerializer(events, many=True)
#     return Response(serializer.data)
#   except:
#     return Response({'message': 'You Currently do not have any upcoming events'}, status=status.HTTP_404_NOT_FOUND)

# @api_view(['GET', 'POST'])
# def invitations(request, id=None):
#   user=request.user

#   if request.method == 'POST':
#     serializer=InvitationSerializer(data=request.data,)
#     if serializer.is_valid():
#       serializer.save()
#       # #####################
#       # SEND INVITATIONS HERE
#       # #####################
#       return Response({'message': 'Invitation(s) sent'}, status.HTTP_201_CREATED)
#     return Response({'message': 'Event not valid'}, status.HTTP_400_BAD_REQUEST)

#   if id is not None:
#     invitation = Invitation.objects.get(id)
#     event=invitation.event
#     if user == invitation.invited_user or user==event.host or user==invitation.invited_by:
#       # ^ fix this :(
#       serializer = InvitationSerializer(invitation, many=False)
#       return Response(serializer.data)
#     return Response({'message': 'You do not have permission to view this invitation'}, status=status.HTTP_401_UNAUTHORIZED)

#   context = {}
#   try:
#     received_invitations=Invitation.objects.filter(invited_user=user)
#     serializer=InvitationSerializer(received_invitations, many=True)
#     context['received_invitations'] = serializer.data
#   except:
#     pass

#   try:
#     sent_invitations=Invitation.objects.filter(invited_by=user)
#     serializer=InvitationSerializer(sent_invitations, many=True)
#     context['set_invitations'] = serializer.data
#   except:
#     pass

#   return Response(context)