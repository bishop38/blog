# Веб-блог на Next.js с MongoDB и NextAuth

Данный проект является блогом, на фреймворке Next.js версии 14 и базы данных MongoDB с помощью MongoDB Compass.

## Установка

Настройте переменные окружения после того, как склонировали проект:

Создайте файл .env на основе .env.example и запишите в него адрес для подключения к базе данных и токен для NextAuth. Пример:

```bash
MONGODB_URI=mongodb://127.0.0.1/blog
NEXTAUTH_SECRET=my_secret_token
```

**Установите зависимости:**

```bash
npm install
```

**Запустите проект:**

```bash
npm run dev
```

**Откройте браузер и перейдите по адресу:**

http://localhost:3000.
