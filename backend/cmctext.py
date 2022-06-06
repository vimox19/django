import json
import math
import pandas as pd
import requests
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import pymongo

def startscraping():
    link  = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
    headers = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': '10fd7ae5-5540-484a-8820-dc3cade9234e',
    }
    params = {
        'start': 1,
        'limit': 100,
        'sort':"market_cap",

        
    }

    session = requests.Session()
    session.headers.update(headers)
    response = session.get(link,params=params)
    cmc_data = json.loads(response.text)['data']
        
    list = []
    for item in cmc_data:
        
        
        try:
            cmc_rank=item['cmc_rank']
            add_date=item['date_added']
            name=item['name']
            symbol=item['symbol']
            price=item['quote']['USD']['price']
            total_supply=item['total_supply']
            circulating_supply=item['circulating_supply']
            market_cap=item['quote']['USD']['market_cap']
            percent_change_24h=item['quote']['USD']['percent_change_24h']
            pricef=(round(price, 5))

            
            

            data={
                'cmc_rank':cmc_rank,
                'name':name,
                'symbol':symbol,
                'coin_price':pricef,
                'market_cap':int(market_cap),
                'add_date':add_date,
                'total_supply':int(total_supply),
                'circulating_supply':int(circulating_supply), 
                'percent_change_24h':percent_change_24h 
            }
            list.append(data)
            
        except (ConnectionError, Timeout, TooManyRedirects) as e:
            print(e)

    #with open('C:/Users/SOHAIB-SAMADI/Desktop/project-courses/crypto3.json', 'w') as f:
    #json.dump(list, f)

    data_pd=pd.DataFrame.from_dict(list)
    #print(data_pd)
    data_pd.to_csv('C:/Users/SOHAIB-SAMADI/Desktop/project-courses/dataScraped.csv')
    #data_pd.to_csv('linkfile.json')
    client = pymongo.MongoClient('mongodb+srv://vimox:souhaibSAMADI123@cluster0.1jclq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    cmc = client.cmcDb.cmc_coins
    cmc = client.cmcDb.cmc_coins
    try:
        cmc.drop()
        cmc.insert_many(list)
        print(f'inserted {len(list)} articles')
    except:
        print('an error occurred coins were not stored to db {len(list)}')
      
        
    