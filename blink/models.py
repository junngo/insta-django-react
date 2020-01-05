from django.db import models

# Create your models here.
class Sentence(models.Model):
    no = models.IntegerField()
    sentence_ko = models.CharField(max_length=255)
    sentence_eng = models.CharField(max_length=255)
    pub_date = models.DateTimeField('date published')
    source = models.ForeignKey('Source', 
                                null=True,
                                on_delete=models.SET_NULL,
                                related_name="sources")


class Source(models.Model):
    source_code = models.CharField(max_length=4)
    source = models.CharField(max_length=255)
