from django.db import models
from datetime import datetime

# Create your models here.


class Player(models.Model):
    user_id = models.AutoField(primary_key=True)
    # Demographic questions
    gender = models.CharField(null=True, max_length=10)
    age = models.CharField(null=True, max_length=10)
    education = models.CharField(null=True, max_length=20)
    ethnicity = models.CharField(null=True, max_length=50)
    pol_interest = models.IntegerField(null=True)
    pol_stance = models.IntegerField(null=True)
    md_fox = models.IntegerField(null=True)
    md_cnn = models.IntegerField(null=True)

# Create your models here.


class PreSurvey(models.Model):
    user_id = models.IntegerField(primary_key=True, null=False)
    isAgree = models.BooleanField(default=True)
    survey_id = models.IntegerField(null=True)
    # Echo Chamber
    echo1 = models.IntegerField(null=True)
    echo2 = models.IntegerField(null=True)
    echo3 = models.IntegerField(null=True)
    echo4 = models.IntegerField(null=True)
    echo5 = models.IntegerField(null=True)

    real_news1_reliability = models.IntegerField(null=True)
    real_news1_confidence = models.IntegerField(null=True)
    real_news2_reliability = models.IntegerField(null=True)
    real_news2_confidence = models.IntegerField(null=True)
    real_news3_reliability = models.IntegerField(null=True)
    real_news3_confidence = models.IntegerField(null=True)
    real_news4_reliability = models.IntegerField(null=True)
    real_news4_confidence = models.IntegerField(null=True)
    real_news5_reliability = models.IntegerField(null=True)
    real_news5_confidence = models.IntegerField(null=True)
    real_news6_reliability = models.IntegerField(null=True)
    real_news6_confidence = models.IntegerField(null=True)

    fake_news1_reliability = models.IntegerField(null=True)
    fake_news1_confidence = models.IntegerField(null=True)
    fake_news2_reliability = models.IntegerField(null=True)
    fake_news2_confidence = models.IntegerField(null=True)
    fake_news3_reliability = models.IntegerField(null=True)
    fake_news3_confidence = models.IntegerField(null=True)
    fake_news4_reliability = models.IntegerField(null=True)
    fake_news4_confidence = models.IntegerField(null=True)
    fake_news5_reliability = models.IntegerField(null=True)
    fake_news5_confidence = models.IntegerField(null=True)
    fake_news6_reliability = models.IntegerField(null=True)
    fake_news6_confidence = models.IntegerField(null=True)

    start_time = models.DateTimeField(null=True, blank=True)
    end_time = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return str(self.user_id)


class PostSurvey(models.Model):
    user_id = models.IntegerField(primary_key=True, null=False)
    isAgree = models.BooleanField(default=True)
    survey_id = models.IntegerField(null=True)
    # Echo Chamber
    echo1 = models.IntegerField(null=True)
    echo2 = models.IntegerField(null=True)
    echo3 = models.IntegerField(null=True)
    echo4 = models.IntegerField(null=True)
    echo5 = models.IntegerField(null=True)

    real_news1_reliability = models.IntegerField(null=True)
    real_news1_confidence = models.IntegerField(null=True)
    real_news2_reliability = models.IntegerField(null=True)
    real_news2_confidence = models.IntegerField(null=True)
    real_news3_reliability = models.IntegerField(null=True)
    real_news3_confidence = models.IntegerField(null=True)
    real_news4_reliability = models.IntegerField(null=True)
    real_news4_confidence = models.IntegerField(null=True)
    real_news5_reliability = models.IntegerField(null=True)
    real_news5_confidence = models.IntegerField(null=True)
    real_news6_reliability = models.IntegerField(null=True)
    real_news6_confidence = models.IntegerField(null=True)

    fake_news1_reliability = models.IntegerField(null=True)
    fake_news1_confidence = models.IntegerField(null=True)
    fake_news2_reliability = models.IntegerField(null=True)
    fake_news2_confidence = models.IntegerField(null=True)
    fake_news3_reliability = models.IntegerField(null=True)
    fake_news3_confidence = models.IntegerField(null=True)
    fake_news4_reliability = models.IntegerField(null=True)
    fake_news4_confidence = models.IntegerField(null=True)
    fake_news5_reliability = models.IntegerField(null=True)
    fake_news5_confidence = models.IntegerField(null=True)
    fake_news6_reliability = models.IntegerField(null=True)
    fake_news6_confidence = models.IntegerField(null=True)

    start_time = models.DateTimeField(null=True, blank=True)
    end_time = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return str(self.user_id)


class PlayTime(models.Model):
    user_id = models.IntegerField(null=False)
    infoString = models.TextField(max_length=100, null=False)


class SelectTweet(models.Model):
    user_id = models.IntegerField(null=False)
    infoString = models.TextField(max_length=200, null=False)


class SurveyInfo(models.Model):
    totalUserEnd = models.IntegerField(null=False)
    totalAgreeEnd = models.IntegerField(null=False)
    totalDisAgreeEnd = models.IntegerField(null=False)


class FeedbackSurvey(models.Model):
    user_id = models.IntegerField(null=False)
    feedback_text = models.TextField()

    def __str__(self):
        return str(self.user_id)
