from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.filters import SearchFilter

from .models import Event
from .serializers import EventSerializer


class EventListView(
    generics.ListAPIView
):

    queryset = Event.objects.all()

    serializer_class = EventSerializer

    filter_backends = [SearchFilter]

    search_fields = [
        'title',
        'location'
    ]


class EventDetailView(
    generics.RetrieveAPIView
):

    queryset = Event.objects.all()

    serializer_class = EventSerializer