from rest_framework import serializers
from .models import Works,Questions,Services,FeedbackSubmission

class WorksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Works
        fields =['id','title','description','type','thumbnail']

class QuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields =['id','title','description']
        

class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = ['id','title','items']

class FeedbackSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackSubmission
        fields = ['id','name','phone','created_at']
        