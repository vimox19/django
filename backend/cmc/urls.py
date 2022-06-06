from cmc import views
from django.urls import re_path

from django.conf.urls.static import static
from django.conf import settings


urlpatterns=[
    re_path(r'^coins$',views.CoinsApi),
    re_path(r'^news$',views.NewsApi),


]
