from rest_framework import serializers
from .models import Registration


class RegistrationSerializer(
    serializers.ModelSerializer
):

    event_title = serializers.CharField(
        source='event.title',
        read_only=True
    )

    event_date = serializers.DateTimeField(
        source='event.date',
        read_only=True
    )

    class Meta:

        model = Registration

        fields = (
            'id',
            'event_title',
            'event_date',
            'registered_at'
        )