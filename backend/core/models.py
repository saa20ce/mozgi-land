from django.db import models
from django.core.validators import FileExtensionValidator
# Create your models here.

class Works(models.Model):
    TYPES=(
        ('все','all'),
        ('разработка','develop'),
        ('дизайн','design')
    )
    title=models.CharField(verbose_name='Загаловок',max_length=100)
    description=models.CharField(verbose_name='Описание',max_length=50)
    type=models.CharField(choices=TYPES,default='all',verbose_name='Тип поста',max_length=20)
    thumbnail = models.ImageField(
        verbose_name='Превью поста',
        blank=True,
        upload_to='images/thumbnails/',
        validators=[FileExtensionValidator(allowed_extensions=('png', 'jpg', 'webp', 'jpeg', 'gif'))]
    )
    
    class Meta:
        verbose_name='Работа'
        verbose_name_plural='Работы'
    def __str__(self):
        return self.title

class Questions(models.Model):
    title=  models.CharField(verbose_name='Заголовок',max_length=50)
    description = models.CharField(verbose_name='Описание',max_length=50)

    class Meta:
        verbose_name='Вопрос'
        verbose_name_plural='Вопросы'

    def __str__(self):
        return self.title

class Services(models.Model):
    title=models.CharField(verbose_name='Загловок',max_length=50)
    items=models.JSONField(default=list)

    class Meta:
        verbose_name='Сервис'
        verbose_name_plural='Сервисы'

    def __str__(self):
        return self.title