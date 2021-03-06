# MeetupsCalendar

🔥 _Задача повышенной сложности_<br />
💼 _Часть проекта_

<!--start_statement-->
## Задача

Требуется разработать компонент `MeetupsCalendar` для вывода списка митапов в виде календаря:
- Единственный обязательный параметр `meetups` со списком митапов;
- Изначально в компоненте отображается текущий месяц и год;
- Вверху календаря отображается через пробел название текущего месяца (локализовано) и год;
- На каждой странице календаря выводятся все дни текущего месяца и дни соседних месяцев, которые попали на недели текущего месяца;
- Кнопки на календаре переключают на отображение предыдущего и следующего месяцев;
- Если в целое число недель попадают дни предыдущего или следующего месяцев, ячейки этих дней требуется отобразить неактивными;
- В каждой ячейке выводится список митапов этого дня.

## О типе Date во Vue

Тип Date мутабельный. Мы можем изменять дату вызывая, например, такие методы, как `date.setMonth(newDate)`. Однако тип `Date` не реактивный во Vue (как во второй, так и в третьей версии). То есть при хранении "даты в дате" (типа `Date` в `data` компонента) её требуется изменять присваиванием нового значения, а не мутацией старого.

```javascript
data() {
  return {
    date: new Date(),
  };
},
// ...
this.date.setMonth(1);                       // Не реактивно!
this.date = new Date(this.date.setMonth(1)); // Реактивно 
```

## Примечание о локализации

В рамках этой задачи предлагается выводить месяц и год в формате `Month YYYY`, где `Month` - это локализованное имя месяца.

В полной мере локализованный компонент должен учитывать больше, чем перевод месяца. Например, первый день недели может быть воскресение. 

## Результат

<img src="https://i.imgur.com/d5MEC4p.png" alt="Example" />
<!--end_statement-->

---

### Инструкция

📝 Для решения задачи отредактируйте файл: `MeetupsCalendar.js`.

🚀 Команда запуска для ручного тестирования: `npm run file-serve`;<br>
приложение будет доступно на [http://localhost:5000/02-components/08-MeetupsCalendar](http://localhost:5000/02-components/08-MeetupsCalendar).

✅ Доступно автоматическое тестирование: `npm test MeetupsCalendar`.
