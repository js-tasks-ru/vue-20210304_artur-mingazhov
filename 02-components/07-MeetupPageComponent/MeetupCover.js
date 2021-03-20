export default {
  name: 'MeetupCover',
  props: {
    link: {
      type: String,
    },
    title: {
      type: String,
    }
  },

  computed: {
    cover() {
      return this.link ? `--bg-url: url('${this.link}')` : null
    }
  },
  template: `
   <div class="meetup-cover" :style="cover">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`
};
