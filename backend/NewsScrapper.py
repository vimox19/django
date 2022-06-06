from bs4 import BeautifulSoup
import requests
import json
import pandas as pd
import pymongo


def startscraping2():

    page = requests.get("https://www.theblockcrypto.com/category/bitcoin")
    parsedPage=BeautifulSoup(page.content,'lxml')
    list = []

    def extract_data(div_news):
        title = div_news.find('h3',{'class':'font-headline mb-2 font-size-15'}).get_text()
        content = div_news.find('div',{'class':'theme'}).get_text()
        date = div_news.find('h5',{'class':'font-meta'}).get_text()
        link = div_news.find('a', href=True)
        links_with_text = []
        if link.text: 
            link=link['href']
    

        data = {
                'Title':title,
                'Content' : content,
                'Date':date,
                'Link':"https://www.theblockcrypto.com"+link
            }
        list.append(data)


        return list

    def getnews(pageUrl):
        page = requests.get(pageUrl)
        parsedPage = BeautifulSoup(page.content,'lxml')
        citations = parsedPage.find_all('article',{'class':'feedCard linked'})
        if len(citations)>0:
            citations_list = [extract_data(citation) for citation in citations]
            return citations_list
        else:
            return None


    data = getnews('https://www.theblockcrypto.com/category/bitcoin')
    # print(data)

    page_url = f'https://www.theblockcrypto.com/category/bitcoin'
    current_page_quotes = getnews(page_url)


    data_pd=pd.DataFrame.from_dict(list)
    print(data_pd)
        
    client = pymongo.MongoClient('mongodb+srv://vimox:souhaibSAMADI123@cluster0.1jclq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    cmc = client.cmcDb.cmc_news
    try:
        cmc.drop()
        cmc.insert_many(list)
        print(f'inserted {len(list)} articles')
    except:
        print('an error occurred quotes were not stored to db {len(list)}')


