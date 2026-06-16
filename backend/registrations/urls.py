from django.urls import path

from .views import (
    RegisterEventView,
    MyRegistrationsView
)

urlpatterns = [

    path(
        'events/<int:pk>/register/',
        RegisterEventView.as_view()
    ),

    path(
        'my-registrations/',
        MyRegistrationsView.as_view()
    )
]