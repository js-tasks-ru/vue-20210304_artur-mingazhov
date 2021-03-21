import MeetupAgendaItem from './MeetupAgendaItem.js';

export default {
  name: 'MeetupAgenda',
  components: {
    MeetupAgendaItem,
  },
  props: {
    agenda: {
      type: Array,
      required: true
    }
  },

  template: `
    <div class="meetup-agenda">
       <meetup-agenda-item :agendaItem="item" 
       v-for="(item, indx) in agenda"
       :key="indx"
       />
    </div>`,
};