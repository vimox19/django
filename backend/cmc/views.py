from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from cmc.models import Coins
from cmc.models import News

from cmc.serializers import CoinsSerializer,NewsSerializer

from django.core.files.storage import default_storage

# Create your views here.

@csrf_exempt
def CoinsApi(request,id=0):
    if request.method=='GET':
        coins = Coins.objects.all()
        coins_serializer=CoinsSerializer(coins,many=True)
        return JsonResponse(coins_serializer.data,safe=False)
    elif request.method=='POST':
        coins_data=JSONParser().parse(request)
        coins_serializer=CoinsSerializer(data=coins_data)
        if coins_serializer.is_valid():
            coins_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
@csrf_exempt
def NewsApi(request,id=0):
    if request.method=='GET':
        news = News.objects.all()
        news_serializer=NewsSerializer(news,many=True)
        return JsonResponse(news_serializer.data,safe=False)
    
    