from django.views import View
from newsapi import NewsApiClient
from django.conf import settings
from django.http import JsonResponse

class ApiNewsViews(View):

    def get_top_headlines(request):
        result = NewsApiClient(api_key=settings.API_NEWS_KEY).get_top_headlines()
        return JsonResponse(result)

    def search_news_editors(request,category,language,country):
        result = NewsApiClient(api_key= settings.API_NEWS_KEY).get_sources(category,language, country)
        return JsonResponse(result)

    def search_news(request,
            keywords=None,
            qintitle=None,
            sources=None,
            domains=None,
            exclude_domains=None,
            from_param=None,
            to=None,
            language=None,
            sort_by=None,
            page=None,
            page_size=None):
        result = NewsApiClient(api_key=settings.API_NEWS_KEY).get_everything(keywords,qintitle,sources,
                                                                            domains,exclude_domains,from_param,to,
                                                                            language,sort_by,page,page_size)
        return JsonResponse(result)
