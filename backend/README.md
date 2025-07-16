# Mozgi-Land — Backend

## Установка Python-окружения

Создайте и активируйте виртуальное окружение:

### macOS / Linux:

```bash
python3 -m venv venv
source venv/bin/activate
```

### Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

## Установка зависимостей

```bash
pip install -r requirements.txt
```

## Запуск сервера разработки

```bash
python manage.py runserver
```

API будет доступен по адресу: http://127.0.0.1:8000/api/

## Telegram-уведомления (опционально)

Для работы отправки уведомлений в Telegram необходимо:
1. В папке `backend` найдите файл `.env.example`.
2. Cкопируйте файл и переименуйте копию в `.env`.
3. Откройте `.env` и заполните значения:

```env
TELEGRAM_TOKEN
TELEGRAM_CHAT_ID
```

## Доступ к админ-панели

Если вам нужно создать администратора для доступа к админ-панели, выполните команду:

### Windows

```bash
py manage.py createsuperuser
```

### macOS / Linux

```bash
python3 manage.py createsuperuser
```

и следуйте инструкциям в терминале.

## Документация

- [Корневой README](../README.md)
- [README для фронтенда](../frontend/README.md)

