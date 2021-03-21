export default {
  name: 'MeetupDescription',

  props: {
    description: {
      type: String,
    }
  },
  data() {
    return {

    };
  },

  template: `<p class="meetup-description">{{description}}</p>`,
};
