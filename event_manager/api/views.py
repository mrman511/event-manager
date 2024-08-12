from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from users.models import CustomUser
from users.serializers import CustomUserSerializer
from social_events.models import Event, Invitation
from social_events.serializers import EventSerializer, InvitationSerializer

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


@api_view(['GET'])
def my_events(request):
  user=request.user
  events=Event.objects.filter(host=user)
  serializer=EventSerializer(events, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def create_event(request):
  user=request.user
  if not user:
    return Response(status=status.HTTP_401_UNAUTHORIZED)
  data = request.data
  serializer = EventSerializer(data=data, many=False)
  if serializer.is_valid():
    serializer.save(host=user)
    return Response({'message': 'Event Created'}, status=status.HTTP_201_CREATED)
  return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def single_event(request, id):
    return Response({'message': 'Nothing here'}, status=status.HTTP_404_NOT_FOUND)
