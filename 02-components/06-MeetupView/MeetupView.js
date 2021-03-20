import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupInfo from './MeetupInfo.js';
import { getImageUrlByImageId } from './data.js';

export default {
  name: 'MeetupView',
  props: {
    meetup: {
      type: Object,
      required: true
    }
  },
  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
  },
  computed: {
    meetupDate() {
      return new Date(this.meetup.date)
    },
    meetupImagelink() {
      return this.meetup.imageId ? getImageUrlByImageId(this.meetup.imageId) : null
    },

  },
  template: `
    <div v-if="meetup">
     <meetup-cover :title="meetup.title" :link="meetupImagelink"></meetup-cover>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description"></meetup-description>
            <h3>Программа</h3>
             <p class="meetup-agenda__empty" v-if="!meetup.agenda.length">Программа пока пуста, но когда-нибудь в ней
              обязательно что-нибудь появится!
            </p>
          <meetup-agenda :agenda="meetup.agenda" v-else/>
          </div>
          <div class="meetup__aside">
            <meetup-info :organizer="meetup.organizer" :place="meetup.place" :date="meetupDate"></meetup-info>
          </div>
        </div>
      </div>
    </div>`,
};


/**/