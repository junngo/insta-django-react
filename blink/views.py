from random import shuffle
from django.http import Http404
from django.shortcuts import render

from .models import Sentence


def index(request):
    latest_sentence_list = Sentence.objects.all()
    context = {'latest_sentence_list': latest_sentence_list}
    
    return render(request, 'blink/index.html', context)

def detail(request):

    if request.method == 'POST':
        learning_method = request.POST['choice']
        start_sentence = request.POST['min']
        end_sentence = request.POST['max']

        sentence_queryset = Sentence.objects.filter(no__range=(start_sentence, end_sentence))
        sentence_list = list(sentence_queryset);

        # shuffle sentence for review
        if learning_method == 'blink_review':
            shuffle(sentence_list)

        context = {'sentence_list': sentence_list, 'learning_method':learning_method}

        return render(request, 'blink/detail.html', context)
