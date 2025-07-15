from django.contrib import admin
from .models import Works, WorkImage, Questions, Services, FeedbackSubmission

class WorkImageInline(admin.TabularInline):
    model = WorkImage
    extra = 1  

@admin.register(Works)
class WorksAdmin(admin.ModelAdmin):
    inlines = [WorkImageInline]
    list_display = ('title_ru', 'type')

admin.site.register(Questions)
admin.site.register(Services)
admin.site.register(FeedbackSubmission)
