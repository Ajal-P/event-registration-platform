from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView

from rest_framework.response import Response

from rest_framework.permissions import (
    IsAuthenticated
)

from rest_framework import status

from events.models import Event

from .models import Registration

from .serializers import (
    RegistrationSerializer
)


class RegisterEventView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def post(
        self,
        request,
        pk
    ):

        try:

            event = Event.objects.get(
                pk=pk
            )

        except Event.DoesNotExist:

            return Response(
                {
                    "message":
                    "Event not found"
                },
                status=404
            )

        registration, created = (
            Registration.objects.get_or_create(
                user=request.user,
                event=event
            )
        )

        if not created:

            return Response(
                {
                    "message":
                    "Already registered"
                },
                status=400
            )

        return Response(
            {
                "message":
                "Registration successful"
            },
            status=201
        )
    
class MyRegistrationsView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(
        self,
        request
    ):

        registrations = (
            Registration.objects.filter(
                user=request.user
            )
        )

        serializer = (
            RegistrationSerializer(
                registrations,
                many=True
            )
        )

        return Response(
            serializer.data
        )