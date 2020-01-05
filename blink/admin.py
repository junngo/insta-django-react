from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from .models import Sentence, Source


# Register your models here.
class SentenceResource(resources.ModelResource):

    class Meta:
        model = Sentence
        skip_unchanged = True
        report_skipped = True
        exclude = ('id','pub_date', 'source',)
        import_id_fields = ('no', 'sentence_ko', 'sentence_eng',)


class SentenceAdmin(ImportExportModelAdmin):
    resource_class = SentenceResource
    list_display = (
        'no',
        'sentence_ko',
    )

admin.site.register(Sentence, SentenceAdmin)
admin.site.register(Source)
