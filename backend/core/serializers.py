from rest_framework import serializers
from .models import Works,Questions,Services,FeedbackSubmission

class WorksSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()

    def get_title(self, obj):
        lang = self.context.get('lang', 'ru')
        return getattr(obj, f"title_{lang}", obj.title_ru)

    def get_description(self, obj):
        lang = self.context.get('lang', 'ru')
        return getattr(obj, f"description_{lang}", obj.description_ru)

    class Meta:
        model = Works
        fields = ['id', 'title', 'description', 'type', 'thumbnail']

class QuestionsSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()

    def get_title(self, obj):
        lang = self.context.get('lang', 'ru')
        return getattr(obj, f"title_{lang}", obj.title_ru)

    def get_description(self, obj):
        lang = self.context.get('lang', 'ru')
        return getattr(obj, f"description_{lang}", obj.description_ru)

    class Meta:
        model = Questions
        fields = ['id', 'title', 'description']
        

class ServicesSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    items = serializers.SerializerMethodField()

    def get_title(self, obj):
        lang = self.context.get('lang', 'ru')
        return getattr(obj, f"title_{lang}", obj.title_ru)

    def get_items(self, obj):
        lang = self.context.get('lang', 'ru')
        return getattr(obj, f"items_{lang}", obj.items_ru)

    class Meta:
        model = Services
        fields = ['id', 'title', 'items']

class FeedbackSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackSubmission
        fields = ['id','name','phone','created_at']
        