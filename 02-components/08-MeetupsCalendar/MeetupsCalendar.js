export const MeetupsCalendar = {
  name: 'MeetupsCalendar',
  props: {
    meetups: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      date: new Date(),
    }
  },
  methods: {
    monthUp() {
      this.date = new Date(this.date.setMonth(this._currentMonth + 1, 15));
    },
    monthDown() {
      this.date = new Date(this.date.setMonth(this._currentMonth - 1, 15));
    },
    _getLastDayOfMonth(year, month) {
      let date = new Date(year, month + 1, 0);
      return date.getDate();
    },
    _initCalendar(start, end, isInactive) {
      let arr = [];

      for (let i = start; i < end; i++) {
        arr.push({
          date: i + 1,
          meetupsDate: this._meetupsDate(i + 1),
          isInactive: isInactive,
        })
      }

      return arr;
    },
    _meetupsDate(day) {
      let arr = [];

      for (let i = 0; i < this.meetups.length; i++) {

        if (new Date(this.meetups[i].date).setHours(0, 0, 0, 0) === new Date(this._year, this._currentMonth, day).setHours(0, 0, 0, 0)) {

          arr.push(this.meetups[i].title)
        }
      }

      return arr;
    }
  },
  computed: {
    currentDate() {
      return this.date.toLocaleDateString(navigator.language, {
        year: 'numeric',
        month: 'long',
      });
    },
    calendar() {

      return [
        ...this._daysBefore,
        ...this._daysIn,
        ...this._daysAfter
      ]
    },
    _currentMonth() {
      return this.date.getMonth();
    },
    _year() {
      return this.date.getFullYear();
    },
    _daysIn() {

      let start = 0;
      let end = this._getLastDayOfMonth(this._year, this._currentMonth);

      return this._initCalendar(start, end, false)
    },
    _daysBefore() {

      let lastDay = this._getLastDayOfMonth(this._year, this._currentMonth - 1);
      let start = lastDay - (new Date(this._year, this._currentMonth, 1).getDay() || 7) + 1;
      let end = lastDay;

      return this._initCalendar(start, end, true);
    },
    _daysAfter() {

      let dayOfWeek = new Date(this._year, this._currentMonth + 1, 1).getDay();
      let end = 0;
      const start = 0;

      if (dayOfWeek == 0) end = 1
      else if (dayOfWeek == 1) end = 0
      else end = 8 - dayOfWeek;

      return this._initCalendar(start, end, true)
    },

  },
  template: `<div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button class="rangepicker__selector-control-left" @click = "monthDown"></button>
          <div>{{ currentDate }}</div>
          <button class="rangepicker__selector-control-right" @click = "monthUp"></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
       <div class="rangepicker__cell "
       :class = "{ rangepicker__cell_inactive: day.isInactive }"
       v-for="day in calendar"
       >{{ day.date }}
        <a class="rangepicker__event" v-for="md in day.meetupsDate">{{ md }}</a>
       </div>

      </div>
    </div>
  </div>`,
};

