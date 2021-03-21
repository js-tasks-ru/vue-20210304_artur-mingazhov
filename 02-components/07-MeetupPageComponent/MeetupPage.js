import MeetupView from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export default {
  name: 'MeetupPage',
  components: {
    MeetupView
  },
  data() {
    return {
      meetup: null,
    }

  },
  async mounted() {

    this.meetup = await fetchMeetup(MEETUP_ID);

  },

  template: `
 <meetup-view :meetup="meetup" v-if=" meetup "/>
  `,
};
