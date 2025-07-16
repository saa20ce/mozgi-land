# Mozgi-Land — Frontend

## Установка зависимостей

```bash
npm install
# или
yarn install
```

## Запуск в режиме разработки

```bash
npm run dev
# или
yarn dev
```
После запуска перейдите в браузере по адресу: http://localhost:3000

## Production-сборка и запуск

Соберите проект:

```bash
npm run build
# или
yarn build
```

Запустите production-сервер:

```bash
npm run start
# или
yarn start
```

## Проверка кода

Запуск линтера:

```bash
npm run lint
# или
yarn lint
```

## Настройка API

Для корректной работы API:
1.  В папке `frontend` найдите файл `.env.example`. 

2. Cкопируйте файл и переименуйте копию в `.env.local`.

2. Откройте `.env.local`  и заполните значения:

```env
DJANGO_API_URL
```

## Документация

- [Корневой README](../README.md)
- [README для бэкенда](../backend/README.md)