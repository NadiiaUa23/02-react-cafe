Що ми будуємо:
Маленький додаток для голосування. Користувач тисне кнопку:
✅ Good
😐 Neutral
❌ Bad
І бачить статистику.

🧩 Розбір коду покроково:
🔹 1. Імпорти:
tsx
Копировать
Редактировать
import { useState } from "react"; // додає стан у функціональний компонент
import css from "./App.module.css"; // стилі для компоненту App
import CafeInfo from "../CafeInfo/CafeInfo"; // інфо про кафе
import VoteOptions from "../VoteOptions/VoteOptions"; // кнопки для голосування
import VoteStats from "../VoteStats/VoteStats"; // статистика голосів

import type { Votes, VoteType } from "../../types/votes"; // типи
💡 import type — тому що це тільки типи, а не функції чи компоненти.

🔹 2. useState з обʼєктом:
tsx
Копировать
Редактировать
const [votes, setVotes] = useState<Votes>({
good: 0,
neutral: 0,
bad: 0,
});
Тут ми створюємо стан (state):

votes — обʼєкт: { good: 0, neutral: 0, bad: 0 }

setVotes — функція, яка його змінює

🔹 3. Функція голосування:
tsx
Копировать
Редактировать
const handleVote = (type: VoteType) => {
setVotes((prevVotes) => ({
...prevVotes,
[type]: prevVotes[type] + 1,
}));
};
Як це працює:
type = 'good', 'neutral' або 'bad'

Коли ти тиснеш кнопку, наприклад "good", вона викликає:

tsx
Копировать
Редактировать
setVotes((prevVotes) => ({
...prevVotes,
good: prevVotes.good + 1
}));
...prevVotes — копіює старі значення
[type] — змінює саме те поле, яке передали

🔹 4. Скидання голосів:
tsx
Копировать
Редактировать
const resetVotes = () => {
setVotes({
good: 0,
neutral: 0,
bad: 0,
});
};
Все обнуляється до початкового стану.

🔹 5. JSX — відображення:
tsx
Копировать
Редактировать
return (

  <div className={css.app}>
    <CafeInfo /> // опис кафе
    <VoteOptions
      onVote={handleVote}
      onReset={resetVotes}
      canReset={votes.good + votes.neutral + votes.bad > 0}
    />
    <VoteStats votes={votes} />
  </div>
);
✅ VoteOptions — кнопки для голосування. Ми передаємо:

onVote — що робити при кліку

onReset — що робити при Reset

canReset — чи показувати кнопку Reset (якщо хоч 1 голос)

📊 VoteStats — показує:

good / neutral / bad

total голосів

відсоток позитивних

🧠 Що ти тут вивчаєш:
Тема Що тренуєш
useState зберігання обʼєкта
Обробники подій функції з параметрами
Умовний рендер canReset && ...
Деструктуризація пропсів і обʼєктів
Типізація VoteType, Votes
