from django.contrib import admin
from django.urls import path
import Game.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Game.views.start, name="start"),
    path('pre-survey', Game.views.preSurvey, name="preSurvey"),
    path('scenario1', Game.views.scenario1, name="scenario1"),
    path('scenario2', Game.views.scenario2, name="scenario2"),
    path('scenario3', Game.views.scenario3, name="scenario3"),
    path('post-survey', Game.views.postSurvey, name="postSurvey"),
    path('rank', Game.views.rank, name="rank"),
    path('admin-login/', Game.views.adminLogin, name="adminLogin"),
    path('admin-download/', Game.views.adminDownload, name="adminDownload"),
    path('admin-download/csv', Game.views.csvDownload, name="csvDownload"),
    path('admin-download/json/time',
         Game.views.jsonTimeDownload, name="jsonTimeDownload"),
    path('admin-download/json/tweet',
         Game.views.jsonTweetDownload, name="jsonTweetDownload"),
    path('feedback/', Game.views.feedback, name="feedback"),
    path('feedback_submit/', Game.views.feedback_submit, name="feedback_submit")
]
