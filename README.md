# Echo Chamber Game

## Dev Env

- Django

### DB initialize

```bash
  find . -path "_/migrations/_.py" -not -name "**init**.py" -delete
  find . -path "_/migrations/_.pyc" -delete
  //db.sqlite3삭제
  python manage.py migrate
  python manage.py makemigrations Game
  python manage.py migrate Game
  python manage.py showmigrations Game
```

- 처음 프로젝트 생성하면 관리자 페이지 들어가서 SurveyInfo 객체를 생성해주어야함.
  surveyInfo에서 객체를 생성하고 각각 0, 0, 0으로 초기 값을 넣어주면 됨.

### Create SuperUser Account 

```bash
  python manage.py createsuperuser
```

# Install

```bash
pip install libsass django-compressor django-sass-processor
```

# EC2 초기 설정
- Instance 종료 후 re-setting시, gunicorn/nginx 설정  
sudo systemctl start gunicorn.service  
sudo systemctl restart nginx  
(ALLOWD_HOSTS 변경 체크, settings.py 변경 후 gunicorn도 restart 필요함)
