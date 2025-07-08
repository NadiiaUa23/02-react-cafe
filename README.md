# ☕ Feedback Widget — Sip Happens Café

Це маленький React + TypeScript застосунок для голосування за сервіс у кав'ярні. Користувач може залишити відгук: Good / Neutral / Bad, а також бачити статистику та скидати її.

---

## 🧠 Що робить цей сайт

- Користувач обирає оцінку натисканням кнопки.
- Збір голосів зберігається у стані (`votes`) у компоненті `App`.
- Статистика та відсоток позитивних голосів автоматично підраховуються.
- Якщо немає голосів — виводиться повідомлення `No feedback yet`.
- Кнопка Reset зʼявляється тільки якщо вже є голоси.

---

## 🗂 Структура папок

```
src/
│
├── components/
│   ├── App/
│   │   ├── App.tsx
│   │   └── App.module.css
│   ├── CafeInfo/
│   ├── VoteOptions/
│   ├── VoteStats/
│   └── Notification/
│
├── types/
│   └── votes.ts
```

---

## 📦 Технології

- React + TypeScript
- CSS Modules
- useState для стану
- Пропси з інтерфейсами
- Умовний рендеринг
- modern-normalize

---

## 🚀 Запуск локально

1. Встанови залежності:

```bash
npm install
```

2. Запусти проєкт:

```bash
npm run dev
```

---

## 🧾 Типи

```ts
export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

export type VoteType = "good" | "neutral" | "bad";
```

---

## 💡 Поради для себе

- Весь стан зберігається в `App.tsx`.
- Логіку (totalVotes, positiveRate) рахую в `App`, а не в інших компонентах.
- Якщо хочеш щось змінити — роби це спочатку в `App`.

---

## 🧼 Стилізація

Стилі з GitHub-репозиторію:
[goitacademy/react-cafe-styles](https://github.com/goitacademy/react-cafe-styles)

Скопійовані файли стилів зберігаються у відповідних папках компонентів.

---

## ✨ Авторка

Проєкт зроблено з любовʼю 💜 Надя, Frontend Developer 🌸
