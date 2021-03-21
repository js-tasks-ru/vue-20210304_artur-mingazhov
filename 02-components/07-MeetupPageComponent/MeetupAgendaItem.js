import { getAgendaItemIcons, getAgendaItemDefaultTitles } from './data.js';

export default {
  name: 'MeetupAgendaItem',
  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    agendaItemIcon() {
      return `\/assets\/icons\/icon-${getAgendaItemIcons()[this.agendaItem.type]}.svg`
    },
    agendaItemTitle() {
      return this.agendaItem.title ? this.agendaItem.title : getAgendaItemDefaultTitles()[this.agendaItem.type]
    }
  },
  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="agendaItemIcon" />
      </div>
      <div class="meetup-agenda__item-col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">
        {{ agendaItemTitle }}
        </h5>
        <template v-if="agendaItem.type === 'talk'">
           <p>
              <span>{{ agendaItem.speaker }}</span>
              <span class="meetup-agenda__dot"></span>
              <span class="meetup-agenda__lang">{{ agendaItem.language }}</span>
           </p>
        </template>
        <p v-if="agendaItem.description">{{  agendaItem.description }}</p>
      </div>
    </div>`,
};

