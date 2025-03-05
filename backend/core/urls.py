from django.urls import path    
from .views import WorksListView,QuestionsListView,ServicesListView


urlpatterns = [
    path('works/',WorksListView.as_view(),name='works-list'),
    path('questions/',QuestionsListView.as_view(),name='questions-list'),
    path('services/',ServicesListView.as_view(),name='services-list'),
]
