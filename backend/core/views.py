from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Works,Questions,Services,FeedbackSubmission
from .serializers import WorksSerializer,QuestionsSerializer,ServicesSerializer,FeedbackSubmissionSerializer
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, CreateAPIView
import logging
from telegram_notify import send_telegram_message
import asyncio
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
    
logger = logging.getLogger(__name__)

class FeedbackSubmissionView(CreateAPIView):
    serializer_class = FeedbackSubmissionSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        instance = serializer.save()
        message = (
            f"📥 Новая заявка на консультацию\n\n"
            f"👤 ФИО: {instance.name}\n"
            f"📞 Телефон: {instance.phone}\n"
            f"🕒 Время: {instance.created_at.strftime('%Y-%m-%d %H:%M:%S')}"
        )
        try:
            asyncio.run(send_telegram_message(message))
        except Exception as e:
            print(f"Ошибка отправки в Telegram: {e}")

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            instance = serializer.instance  

            return Response(
                {
                    "message": "Заявка успешно создана",
                    "data": {
                        "id": instance.id,
                        "created_at": instance.created_at.isoformat()
                    }
                },
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
