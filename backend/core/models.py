from django.db import models
from django.core.validators import FileExtensionValidator

class Works(models.Model):
    TYPES = (
        ('все', 'all'),
        ('разработка', 'develop'),
        ('дизайн', 'design')
    )
    title_ru = models.CharField(verbose_name='Заголовок (RU)', max_length=100)
    title_en = models.CharField(verbose_name='Заголовок (EN)', max_length=100)
    description_ru = models.CharField(verbose_name='Описание (RU)', max_length=50)
    description_en = models.CharField(verbose_name='Описание (EN)', max_length=50)
    type = models.CharField(choices=TYPES, default='all', verbose_name='Тип поста', max_length=20)
    thumbnail = models.ImageField(
        verbose_name='Превью поста',
        blank=True,
        upload_to='images/thumbnails/',
        validators=[FileExtensionValidator(allowed_extensions=('png', 'jpg', 'webp', 'jpeg', 'gif'))]
    )

    class Meta:
        verbose_name = 'Работа'
        verbose_name_plural = 'Работы'

    def __str__(self):
        return self.title_ru

class WorkImage(models.Model):
    work = models.ForeignKey(Works, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(
        verbose_name='Фото работы',
        upload_to='images/works/',
        validators=[FileExtensionValidator(allowed_extensions=('png', 'jpg', 'webp', 'jpeg', 'gif'))]
    )

    def __str__(self):
        return f"Фото для {self.work.title_ru}"

class Questions(models.Model):
    title_ru = models.CharField(verbose_name='Заголовок (RU)', max_length=50)
    title_en = models.CharField(verbose_name='Заголовок (EN)', max_length=50)
    description_ru = models.CharField(verbose_name='Описание (RU)', max_length=50)
    description_en = models.CharField(verbose_name='Описание (EN)', max_length=50)

    class Meta:
        verbose_name = 'Вопрос'
        verbose_name_plural = 'Вопросы'

    def __str__(self):
        return self.title_ru

class Services(models.Model):
    title_ru = models.CharField(verbose_name='Заголовок (RU)', max_length=50)
    title_en = models.CharField(verbose_name='Заголовок (EN)', max_length=50)
    items_ru = models.JSONField(default=list, verbose_name='Пункты (RU)')
    items_en = models.JSONField(default=list, verbose_name='Пункты (EN)')

    class Meta:
        verbose_name = 'Сервис'
        verbose_name_plural = 'Сервисы'

    def __str__(self):
        return self.title_ru

class FeedbackSubmission(models.Model):
    name = models.CharField(verbose_name='ФИО', max_length=100)
    phone = models.CharField(verbose_name='Телефон', max_length=20)
    created_at = models.DateTimeField(auto_now=True, verbose_name='Дата создания')

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'

    def __str__(self):
        return f"{self.name} - {self.phone}"