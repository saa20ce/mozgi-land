from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Works,Questions,Services
from .serializers import WorksSerializer,QuestionsSerializer,ServicesSerializer
from rest_framework.permissions import AllowAny
# Create your views here.

class WorksListView(ListAPIView):
    serializer_class = WorksSerializer
    permission_classes=[AllowAny]
    def get_queryset(self):
        queryset = Works.objects.all()
        print(f"Queryset:{queryset}")
        print(f"User: {self.request.user}")
        return queryset
class QuestionsListView(ListAPIView):
    serializer_class = QuestionsSerializer
    permission_classes=[AllowAny]
    def get_queryset(self):
        queryset = Questions.objects.all()
        print(f"Queryset:{queryset}")
        return queryset


class ServicesListView(ListAPIView):
    serializer_class = ServicesSerializer
    permission_classes=[AllowAny]
    def get_queryset(self):
        queryset = Services.objects.all()
        print(f"Queryset:{queryset}")
        return queryset