from django.urls import path
from . import views_news_api


urlpatterns = [
    path('', views_news_api.ApiNewsViews.get_top_headlines),
    path('search/editors/<slug:category>/<slug:language>/<slug:country>/',views_news_api.ApiNewsViews.search_news_editors, name='search_news_editors'),
    path('search/<slug:keywords>/',views_news_api.ApiNewsViews.search_news, name='search_news'),
]


