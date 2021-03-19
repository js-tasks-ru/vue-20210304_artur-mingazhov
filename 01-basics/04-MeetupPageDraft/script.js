import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

const app = new Vue({
  el: '#app',
  data() {
    return {
      rawMeetup: null,
    }

  },
  async mounted() {

    let us = await fetch(
      `${API_URL}/meetups/6`
    );
    this.rawMeetup = await us.json();
  },
  watch: {
  },
  methods: {
    getImageUrlByImageId(imageId) {
      return `${API_URL}/images/${imageId}`;
    }
  },
  computed: {
    getAgendaItemIcons() {
      return {
        registration: 'key',
        opening: 'cal-sm',
        talk: 'tv',
        break: 'clock',
        coffee: 'coffee',
        closing: 'key',
        afterparty: 'cal-sm',
        other: 'cal-sm',
      }
    },
    getAgendaItemDefaultTitles() {
      return {
        registration: 'Регистрация',
        opening: 'Открытие',
        break: 'Перерыв',
        coffee: 'Coffee Break',
        closing: 'Закрытие',
        afterparty: 'Afterparty',
        talk: 'Доклад',
        other: 'Другое',
      }
    },
    meetup() {
      if (!this.rawMeetup)
        return null;
      return {
        ...this.rawMeetup,
        cover: this.rawMeetup.imageId ? this.getImageUrlByImageId(this.rawMeetup.imageId) : null,
        localDate: new Date(this.rawMeetup.date).toLocaleString(navigator.language, {
          year: "numeric",
          month: "long",
          day: "numeric"
        }),
        dateOnlyString: new Date(this.rawMeetup.date).toISOString().split('T')[0],

      }
    },

  }

})

app.$mount('#app');
