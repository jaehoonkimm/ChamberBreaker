from django.shortcuts import render, redirect
from .models import *
from django.http import HttpResponse
from datetime import datetime
import csv
import json
import random
from django.utils.encoding import smart_str
from .survey import NullSurveyData
from ast import literal_eval
import env

def start(request):
    return render(request,'start.html')

def preSurvey(request):
    info = SurveyInfo.objects.get(id=1)
    maxNum = 250
    isAgree = None
    if info.totalAgreeEnd < maxNum and info.totalDisAgreeEnd < maxNum:
        isAgree = random.choice([True, False])
    elif info.totalAgreeEnd < maxNum:
        isAgree = True
    elif info.totalDisAgreeEnd < maxNum:
        isAgree = False
    else:
        isAgree = random.choice([True, False])
    date_time_str = str(datetime.now())
    return render(request,'pre-survey.html', {'isAgree':isAgree, 'startTime':date_time_str})

def scenario1(request):
    if request.method == "POST":
        player = Player.objects.create()
        player.save()
        uID = player.user_id
        
        player.gender = request.POST["gender"]
        player.age = request.POST["age"]
        player.education = request.POST["edu"]
        player.ethnicity = request.POST["ethnicity"]
        player.pol_interest = request.POST["inter"]
        player.pol_stance = request.POST["stance"]
        player.md_fox = request.POST["md-fox"]
        player.md_cnn = request.POST["md-cnn"]
        player.save()

        survey = PreSurvey.objects.create(user_id=uID)
        date_string = request.POST["startTime"]
        survey.isAgree = request.POST["isAgree"]
        survey.start_time = datetime.strptime(date_string, '%Y-%m-%d %H:%M:%S.%f')
        survey.survey_id = request.POST["surveyId"]
        survey.echo1 = request.POST["echo1"]
        survey.echo2 = request.POST["echo2"]
        survey.echo3 = request.POST["echo3"]
        survey.echo4 = request.POST["echo4"]
        survey.echo5 = request.POST["echo5"]
        survey.real_news1_reliability = request.POST["tweets_reliable_1"]
        survey.real_news1_confidence = request.POST["tweets_confident_1"]
        survey.real_news2_reliability = request.POST["tweets_reliable_2"]
        survey.real_news2_confidence = request.POST["tweets_confident_2"]
        survey.real_news3_reliability = request.POST["tweets_reliable_3"]
        survey.real_news3_confidence = request.POST["tweets_confident_3"]
        survey.fake_news1_reliability = request.POST["tweets_reliable_4"]
        survey.fake_news1_confidence = request.POST["tweets_confident_4"]
        survey.fake_news2_reliability = request.POST["tweets_reliable_5"]
        survey.fake_news2_confidence = request.POST["tweets_confident_5"]
        survey.fake_news3_reliability = request.POST["tweets_reliable_6"]
        survey.fake_news3_confidence = request.POST["tweets_confident_6"]
        survey.save()
        return render(request,'scenario1.html', {'user_id':uID})
    return redirect('start')

def scenario2(request):
    if request.method == "POST":
        uID = request.POST["uid"]
        playTime = request.POST["playTime"]
        selectTweet = request.POST["selectTweet"]
        PlayTime.objects.create(user_id = uID, infoString = playTime)
        SelectTweet.objects.create(user_id = uID, infoString = selectTweet)

        scenario1 = request.POST["scenario1"]
        return render(request,'scenario2.html', {'user_id':uID, 'scenario1':scenario1})
    return redirect('start')

def scenario3(request):
    if request.method == "POST":
        uID = request.POST["uid"]
        playTime = request.POST["playTime"]
        selectTweet = request.POST["selectTweet"]
        PlayTime.objects.create(user_id = uID, infoString = playTime)
        SelectTweet.objects.create(user_id = uID, infoString = selectTweet)

        scenario1 = request.POST["scenario1"]
        scenario2 = request.POST["scenario2"]
        return render(request,'scenario3.html', {'user_id':uID, 'scenario1':scenario1,'scenario2':scenario2})
    return redirect('start')

def postSurvey(request):
    if request.method == "POST":
        uID = request.POST["uid"]
        playTime = request.POST["playTime"]
        selectTweet = request.POST["selectTweet"]
        PlayTime.objects.create(user_id = uID, infoString = playTime)
        SelectTweet.objects.create(user_id = uID, infoString = selectTweet)

        scenario1 = request.POST["scenario1"]
        scenario2 = request.POST["scenario2"]
        scenario3 = request.POST["scenario3"]

        preSurvey = PreSurvey.objects.get(user_id=uID)
        isAgree = preSurvey.isAgree
        sID = preSurvey.survey_id
        date_time_str = str(datetime.now())
        return render(request,'post-survey.html', {'isAgree':isAgree, 'startTime':date_time_str, 'survey_id':sID,'user_id':uID, 'scenario1':scenario1,'scenario2':scenario2, 'scenario3':scenario3})
    return redirect('start')

def rank(request):
    if request.method == "POST":
        uID = request.POST["uid"]
        date_string = request.POST["startTime"]
        isAgree = request.POST["isAgree"]

        survey = PostSurvey.objects.create(user_id=uID)
        survey.start_time = datetime.strptime(date_string, '%Y-%m-%d %H:%M:%S.%f')
        survey.isAgree = isAgree
        survey.survey_id = request.POST["surveyId"]
        survey.echo1 = request.POST["echo1"]
        survey.echo2 = request.POST["echo2"]
        survey.echo3 = request.POST["echo3"]
        survey.echo4 = request.POST["echo4"]
        survey.echo5 = request.POST["echo5"]
        survey.real_news1_reliability = request.POST["tweets_reliable_1"]
        survey.real_news1_confidence = request.POST["tweets_confident_1"]
        survey.real_news2_reliability = request.POST["tweets_reliable_2"]
        survey.real_news2_confidence = request.POST["tweets_confident_2"]
        survey.real_news3_reliability = request.POST["tweets_reliable_3"]
        survey.real_news3_confidence = request.POST["tweets_confident_3"]
        survey.fake_news1_reliability = request.POST["tweets_reliable_4"]
        survey.fake_news1_confidence = request.POST["tweets_confident_4"]
        survey.fake_news2_reliability = request.POST["tweets_reliable_5"]
        survey.fake_news2_confidence = request.POST["tweets_confident_5"]
        survey.fake_news3_reliability = request.POST["tweets_reliable_6"]
        survey.fake_news3_confidence = request.POST["tweets_confident_6"]
        survey.save()

        info = SurveyInfo.objects.get(id=1)
        info.totalUserEnd = info.totalUserEnd + 1

        if isAgree == "True":
            info.totalAgreeEnd = info.totalAgreeEnd + 1
        else:
            info.totalDisAgreeEnd = info.totalDisAgreeEnd + 1
        info.save()

        scenario1 = request.POST["scenario1"]
        scenario2 = request.POST["scenario2"]
        scenario3 = request.POST["scenario3"]
        return render(request,'rank.html', {'user_id':uID, 'scenario1':scenario1,'scenario2':scenario2, 'scenario3':scenario3})
    return redirect('start')

def adminLogin(request):
    return render(request,'admin-login.html')

def adminDownload(request):
    if request.method == "POST":
        id = request.POST["id"]
        pw = request.POST["pw"]
        if id == env.adminID:
            if pw == env.adminPW:
                return render(request,'admin-download.html')
    return redirect('adminLogin')

def jsonTimeDownload(request):
    if request.method == "POST":
        if request.POST["check_root"] == "jsonTimeDownload":
            userLog = {}
            rows = PlayTime.objects.order_by('user_id')
            for row in rows:
                user_id = row.user_id
                info = literal_eval(row.infoString)
                if userLog.get(user_id):
                    userLog[user_id].update(info)
                else:
                    userLog[user_id] = info
            jsonData = json.dumps(userLog)
            response = HttpResponse(jsonData, content_type='application/json')
            response['Content-Disposition'] = 'attachment; filename="PlayTimeLog.json"'
            return response
    return redirect('adminLogin')

def jsonTweetDownload(request):
    if request.method == "POST":
        if request.POST["check_root"] == "jsonTweetDownload":
            userLog = {}
            rows = SelectTweet.objects.order_by('user_id')
            for row in rows:
                user_id = row.user_id
                info = literal_eval(row.infoString)
                if userLog.get(user_id):
                    userLog[user_id].update(info)
                else:
                    userLog[user_id] = info
            jsonData = json.dumps(userLog)
            response = HttpResponse(jsonData, content_type='application/json')
            response['Content-Disposition'] = 'attachment; filename="TweetSelectLog.json"'
            return response
    return redirect('adminLogin')

def csvDownload(request):
    if request.method == "POST":
        if request.POST["check_root"] == "csvDownload":
            # response content type
            response = HttpResponse(content_type='text/csv')
            #decide the file name
            response['Content-Disposition'] = 'attachment; filename="echochamberSurveyResult.csv"'

            writer = csv.writer(response, csv.excel, delimiter=',')
            response.write(u'\ufeff'.encode('utf8'))

            #write the headers
            writer.writerow([
                    smart_str(u"id"),
                    smart_str(u"gender"),
                    smart_str(u"age"),
                    smart_str(u"education"),
                    smart_str(u"ethnicity"),
                    smart_str(u"pol_interest"),
                    smart_str(u"pol_stance"),
                    smart_str(u"md_fox"),
                    smart_str(u"md_cnn"),
                    smart_str(u"start_time_pre"),
                    smart_str(u"end_time_pre"),
                    smart_str(u"start_time_post"),
                    smart_str(u"end_time_post"),
                    smart_str(u"echo1_pre"),
                    smart_str(u"echo2_pre"),
                    smart_str(u"echo3_pre"),
                    smart_str(u"echo4_pre"),
                    smart_str(u"echo5_pre"),
                    smart_str(u"echo1_post"),
                    smart_str(u"echo2_post"),
                    smart_str(u"echo3_post"),
                    smart_str(u"echo4_post"),
                    smart_str(u"echo5_post"),
                    smart_str(u"isAgree"),
                    smart_str(u"survey_id"),
                    smart_str(u"R1_reliable_pre"),
                    smart_str(u"R1_tw_confident_pre"),
                    smart_str(u"R2_reliable_pre"),
                    smart_str(u"R2_tw_confident_pre"),
                    smart_str(u"R3_reliable_pre"),
                    smart_str(u"R3_tw_confident_pre"),
                    smart_str(u"F1_reliable_pre"),
                    smart_str(u"F1_tw_confident_pre"),
                    smart_str(u"F2_reliable_pre"),
                    smart_str(u"F2_tw_confident_pre"),
                    smart_str(u"F3_reliable_pre"),
                    smart_str(u"F3_tw_confident_pre"),
                    smart_str(u"R1_reliable_post"),
                    smart_str(u"R1_tw_confident_post"),
                    smart_str(u"R2_reliable_post"),
                    smart_str(u"R2_tw_confident_post"),
                    smart_str(u"R3_reliable_post"),
                    smart_str(u"R3_tw_confident_post"),
                    smart_str(u"F1_reliable_post"),
                    smart_str(u"F1_tw_confident_post"),
                    smart_str(u"F2_reliable_post"),
                    smart_str(u"F2_tw_confident_post"),
                    smart_str(u"F3_reliable_post"),
                    smart_str(u"F3_tw_confident_post"),   
            ])

            players = Player.objects.all()

            for player in players:
                preSurvey = None
                postSurvey = None
                preSurvey = PreSurvey.objects.get(user_id=player.user_id)
                try:
                    postSurvey = PostSurvey.objects.get(user_id=player.user_id)
                except:
                    postSurvey = NullSurveyData()
                writer.writerow([
                        smart_str(player.user_id),
                        smart_str(player.gender),
                        smart_str(player.age),
                        smart_str(player.education),
                        smart_str(player.ethnicity),
                        smart_str(player.pol_interest),
                        smart_str(player.pol_stance),
                        smart_str(player.md_fox),
                        smart_str(player.md_cnn),
                        smart_str(preSurvey.start_time),
                        smart_str(preSurvey.end_time),
                        smart_str(postSurvey.start_time),
                        smart_str(postSurvey.end_time),
                        smart_str(preSurvey.echo1),
                        smart_str(preSurvey.echo2),
                        smart_str(preSurvey.echo3),
                        smart_str(preSurvey.echo4),
                        smart_str(preSurvey.echo5),
                        smart_str(postSurvey.echo1),
                        smart_str(postSurvey.echo2),
                        smart_str(postSurvey.echo3),
                        smart_str(postSurvey.echo4),
                        smart_str(postSurvey.echo5),
                        smart_str(preSurvey.isAgree),
                        smart_str(preSurvey.survey_id),
                        smart_str(preSurvey.real_news1_reliability),
                        smart_str(preSurvey.real_news1_confidence),
                        smart_str(preSurvey.real_news2_reliability),
                        smart_str(preSurvey.real_news2_confidence),
                        smart_str(preSurvey.real_news3_reliability),
                        smart_str(preSurvey.real_news3_confidence),
                        smart_str(preSurvey.fake_news1_reliability),
                        smart_str(preSurvey.fake_news1_confidence),
                        smart_str(preSurvey.fake_news2_reliability),
                        smart_str(preSurvey.fake_news2_confidence),
                        smart_str(preSurvey.fake_news3_reliability),
                        smart_str(preSurvey.fake_news3_confidence),
                        smart_str(postSurvey.real_news1_reliability),
                        smart_str(postSurvey.real_news1_confidence),
                        smart_str(postSurvey.real_news2_reliability),
                        smart_str(postSurvey.real_news2_confidence),
                        smart_str(postSurvey.real_news3_reliability),
                        smart_str(postSurvey.real_news3_confidence),
                        smart_str(postSurvey.fake_news1_reliability),
                        smart_str(postSurvey.fake_news1_confidence),
                        smart_str(postSurvey.fake_news2_reliability),
                        smart_str(postSurvey.fake_news2_confidence),
                        smart_str(postSurvey.fake_news3_reliability),
                        smart_str(postSurvey.fake_news3_confidence),

                ])
            return response
    return redirect('adminLogin')