# Кошачий Pinterest 🐱

Интерфейс для просмотра котиков с возможностью добавления их в "любимые".  
Реализован с использованием React, Next.js, TypeScript, TailwindCSS и React Query.

[Посмотреть демо на Vercel](https://frontend-challenge-nu-eight.vercel.app/)

---

## Функционал

- Вкладка "Все котики" по умолчанию
- Возможность добавлять котиков в "любимые" и убирать из них
- Данные о "любимых" котиках хранятся на клиенте
- Вкладка "Любимые котики" отображает добавленных котиков
- Бесконечная прокрутка для подгрузки новых котиков
- Адаптивный интерфейс для разных размеров экрана

---

## Стек технологий

- React
- Next.js
- TypeScript
- TailwindCSS
- React Query

---

## Установка и запуск

1. Устанавливаем зависимости:

```
npm install
# или
yarn
```

2. Создаём файл `.env.local` (если нужен API key):

```
NEXT_PUBLIC_CAT_API=ваш_ключ_TheCatAPI
```

> Проект работает и без ключа API, но рекомендуется использовать ключ для стабильности.

3. Запуск локального сервера разработки:

```
npm run dev
# или
yarn dev
```
Проект будет доступен по адресу http://localhost:3000.

---

## Структура проекта

```
app/
  favorites/          # Страница "Любимые котики"
  shared/
    api/              # API для получения котиков
    hooks/            # Кастомные хуки, например useFavorites
    ui/               # Общие UI-компоненты
  widgets/
    CatGallery/       # Компоненты галереи котиков
      CatCard.tsx
      CatError.tsx
      CatGallery.tsx
      CatSkeleton.tsx
  layout.tsx          # Общий layout приложения
  page.tsx            # Главная страница "Все котики"
```

---

## API

Используется TheCatAPI:

```
const API_URL = 'https://api.thecatapi.com/v1/images/search'

export async function getCats(page = 0, limit = 20) {
  const res = await fetch(`${API_URL}?limit=${limit}&page=${page}&order=ASC`, {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_CAT_API as string,
    },
  })
  if (!res.ok) throw new Error('Failed to fetch cats')
  return res.json()
}
```

- `limit` — количество котиков за один запрос  
- `page` — номер страницы для бесконечной прокрутки  
- `NEXT_PUBLIC_CAT_API` — ключ для API (не обязателен, но рекомендуется)  

---

## Деплой

- GitHub Pages не поддерживает SSR и environment variables → деплой невозможен  
- Проект успешно развернут на Vercel → [ссылка на демо](https://frontend-challenge-nu-eight.vercel.app/)

---

## Демо

<h3>Главная страница</h3>
<img width="1901" height="815" alt="image" src="https://github.com/user-attachments/assets/a8c9a002-4c50-4412-b03b-b71ebe834aeb" />
<h3>Страница "Любимые котики"</h3>
<img width="1918" height="832" alt="image" src="https://github.com/user-attachments/assets/ca4186f9-a1ae-4e1d-983b-1fe5833ccefa" />

