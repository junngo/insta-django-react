from random import shuffle

from django.core.serializers import serialize
from django.core.serializers.json import DjangoJSONEncoder
from django.db.models.query import QuerySet
from django.shortcuts import render

from . import models


def index(request):
    latest_sentence_list = models.Sentence.objects.all()
    context = {'latest_sentence_list': latest_sentence_list}
    
    return render(request, 'blink/index.html', context)

def detail(request):

    if request.method == 'POST':
        learning_method = request.POST['choice']
        start_sentence = request.POST['min']
        end_sentence = request.POST['max']

        data = models.Sentence.objects.filter(no__range=(start_sentence, end_sentence))
        response = serialize('json', data, cls=MyJSONEncoder)
        context = {'sentence_list': response,
                    'learning_method': learning_method,
                    'start_sentence': start_sentence,
                    'end_sentence': end_sentence
                    }

        return render(request, 'blink/detail.html', context)

class MyJSONEncoder(DjangoJSONEncoder):
    def default(self, obj):
        if isinstance(obj, models.Sentence):
            return {'no':obj.no,
                    'sentence_eng':obj.sentence_eng,
                    'sentence_ko':obj.sentence_ko,
                    'pub_date':obj.pub_date,
                    'source':obj.source
                    }
        if isinstance(obj, QuerySet):
            return tuple(obj)
        return super().default(obj)
