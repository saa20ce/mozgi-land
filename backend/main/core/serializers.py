from rest_framework import serializers
from .models import Works,Questions,Services

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