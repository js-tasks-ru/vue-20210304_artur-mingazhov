<template>
  <div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button class="rangepicker__selector-control-left" @click="monthDown"></button>
          <div>{{ currentDate }}</div>
          <button class="rangepicker__selector-control-right" @click="monthUp"></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
        <div
          v-for="(date, i) in calendar"
          :key="i"
          class="rangepicker__cell"
          :class="{ rangepicker__cell_inactive: date.isInactive }"
        >
          {{ date.day }}
          <slot :date="date" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarView',

  data() {
    return {
      date: new Date(),
    };
  },

  computed: {
    currentDate() {
      return this.date.toLocaleDateString(navigator.language, {
        year: 'numeric',
        month: 'long',
      });
    },

    calendar() {
      return [...this._daysBefore, ...this._daysIn, ...this._daysAfter];
    },

    _currentMonth() {
      return this.date.getMonth();
    },

    _year() {
      return this.date.getFullYear();
    },

    _daysIn() {
      const start = 0;
      const end = this._getLastDayOfMonth(this._year, this._currentMonth);

      return this._initCalendar(start, end, this._currentMonth, false);
    },

    _daysBefore() {
      const end = this._getLastDayOfMonth(this._year, this._currentMonth - 1);
      const start = end - (new Date(this._year, this._currentMonth, 1).getDay() || 7) + 1;

      return this._initCalendar(start, end, this._currentMonth - 1, true);
    },

    _daysAfter() {
      const dayOfWeek = new Date(this._year, this._currentMonth + 1, 1).getDay();
      const end = dayOfWeek == 0 ? 1 : dayOfWeek == 1 ? 0 : 8 - dayOfWeek;
      const start = 0;

      return this._initCalendar(start, end, this._currentMonth + 1, true);
    },
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

    _initCalendar(start, end, month, isInactive) {
      return Array.from(Array(end - start), (item, index) => ({
        day: start + index + 1,
        month: month < 0 ? 11 : month > 11 ? 0 : month,
        year: month < 0 ? this._year - 1 : month > 11 ? this._year + 1 : this._year,
        isInactive: isInactive,
      }));
    },
  },
};
</script>

<style scoped>
.rangepicker {
  position: relative;
  margin: 32px 0 0;
}

.rangepicker__selector {
  display: flex;
  background-color: var(--white);
  flex-direction: row;
  justify-content: space-between;
  flex: 1 0 100%;
}

.rangepicker__calendar {
  flex-grow: 1;
}

.rangepicker__month-indicator {
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: var(--blue);
  background-color: var(--blue-extra);
  padding: 24px;
  display: flex;
  justify-content: center;
}

.rangepicker__selector-controls {
  max-width: 325px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
}
.rangepicker__selector-controls button {
  border: none;
  padding: 0;
}

.rangepicker__selector-control-left,
.rangepicker__selector-control-right {
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s all;
  background: url('~@/assets/icons/icon-pill-active.svg') left center no-repeat;
  background-size: cover;
}

.rangepicker__selector-control-left:hover,
.rangepicker__selector-control-right:hover {
  opacity: 0.8;
}

.rangepicker__selector-control-right {
  transform: rotate(180deg);
}

.rangepicker__date-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

/* Dates */
.rangepicker__date-grid {
  border: 1px solid var(--grey);
  border-bottom: none;
}

.rangepicker__cell {
  position: relative;
  height: auto;
  padding: 6px 8px;
  background-color: var(--white);
  color: var(--grey-8);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 1px solid var(--grey);
  border-left: 1px solid var(--grey);
  text-align: right;
}

.rangepicker__cell.rangepicker__cell_inactive {
  background-color: var(--grey-light);
}

@media all and (max-width: 767px) {
  .rangepicker__cell:nth-child(5n + 1) {
    border-left: none;
  }
}

@media all and (min-width: 767px) {
  .rangepicker__date-grid {
    grid-template-columns: repeat(7, 1fr);
  }

  .rangepicker__cell {
    height: 144px;
  }

  .rangepicker__cell:nth-child(7n + 1) {
    border-left: none;
  }
}
</style>
