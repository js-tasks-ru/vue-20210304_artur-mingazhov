<template>
  <div class="form-section form-section_inner">
    <button type="button" class="remove-button" @click="$emit('remove')">
      <img src="@/assets/icons/icon-trash.svg" alt="trash" />
    </button>

    <div class="form__row">
      <div class="form__col">
        <form-group label="Начало">
          <date-input
            type="time"
            placeholder="00:00"
            :value="agendaItem.startsAt"
            @change="
              $emit('update:agendaItem', {
                ...agendaItem,
                startsAt: $event,
              })
            "
          />
        </form-group>
      </div>
      <div class="form__col">
        <form-group label="Окончание">
          <date-input
            type="time"
            placeholder="00:00"
            :value="agendaItem.endsAt"
            @change="
              $emit('update:agendaItem', {
                ...agendaItem,
                endsAt: $event,
              })
            "
          />
        </form-group>
      </div>
    </div>
  </div>
</template>

<script>
import FormGroup from './FormGroup.vue';
import DateInput from './DateInput';
export default {
  name: 'MeetupAgendaItemForm',
  components: {
    FormGroup,
    DateInput,
  },

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
