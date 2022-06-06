from rest_framework import serializers
from cmc.models import Coins
from cmc.models import News


class CoinsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Coins 
        fields=('name','symbol','coin_price','coin_price','add_date','total_supply','circulating_supply')

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model=News 
        fields=('Title','Content','Date','Link')
