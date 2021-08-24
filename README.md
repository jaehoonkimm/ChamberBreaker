# 에코 쳄버 게임 개발

## 개발환경

- Django

### 데이터베이스 초기화하기

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

### 사용자 계정 추가하기

```bash
  python manage.py createsuperuser
```

# 설치 목록

```bash
pip install libsass django-compressor django-sass-processor
```
