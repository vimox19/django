from django.db import models

# Create your models here.
class Coins(models.Model):
    name = models.CharField(max_length=500,primary_key=True)
    symbol = models.CharField(max_length=500)
    coin_price = models.CharField(max_length=500)
    market_cap = models.CharField(max_length=500)
    add_date = models.CharField(max_length=500)
    total_supply = models.CharField(max_length=500)
    circulating_supply = models.CharField(max_length=500)




    
    
class News(models.Model):
    Title = models.CharField(max_length=500,primary_key=True)
    Content = models.CharField(max_length=500)
    Date = models.CharField(max_length=500)
    Link = models.CharField(max_length=500)