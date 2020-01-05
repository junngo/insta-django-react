from django.http import Http404
from django.shortcuts import render

from .models import Sentence


def index(request):
    latest_sentence_list = Sentence.objects.all()
    context = {'latest_sentence_list': latest_sentence_list}
    
    return render(request, 'blink/index.html', context)

def detail(request):

    if request.method == 'POST':
        print(request.POST['choice'])
        start_sentence = request.POST['min']
        end_sentence = request.POST['max']

        latest_sentence_list = Sentence.objects.filter(no__range=(start_sentence, end_sentence))
        context = {'latest_sentence_list': latest_sentence_list}

        return render(request, 'blink/detail.html', context)

    elif request.method == 'get':
        pass
