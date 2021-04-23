<template>
  <app-input :type="type" v-model="valueTr">
    <template v-for="slotName of Object.keys($slots)" #[slotName]>
      <slot :name="slotName" />
    </template>
  </app-input>
</template>

<script>
import AppInput from './AppInput';

var moment = require('moment');
export default {
  name: 'DateInput',
  inheritAttrs: false,
  components: { AppInput },
  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    type: {
      default: 'date',
    },

    value: {},
  },

  computed: {
    valueTr: {
      get() {
        if (typeof this.value === 'string') {
          return this.value;
        } else if (typeof this.value === 'object' || typeof this.value === 'number') {
          if (this.type === 'date') {
            return new Date(this.value).toISOString().split('T')[0];
          }
          if (this.type === 'time' && this.$attrs.step === undefined) {
            return new Date(this.value).toISOString().split('T')[1].slice(0, 5);
          }
          if (this.type === 'time' && this.$attrs.step !== undefined) {
            if (this.$attrs.step % 60 == 0) {
              return new Date(this.value).toISOString().split('T')[1].slice(0, 5);
            } else {
              return new Date(this.value).toISOString().split('T')[1].slice(0, 8);
            }
          }
          if (this.type === 'datetime-local') {
            return new Date(this.value).toISOString().slice(0, 16);
          }
        }
        return null;
      },

      set(newValue) {
        this.handler(newValue);
      },
    },
  },
  methods: {
    handler(e) {
      if (this.valid(e, this.type)) {
        let date = new Date(e);

        if (this.type === 'date') {
          if (typeof this.value === 'number') {
            this.$emit('change', +date);
          } else if (typeof this.value === 'object') {
            this.$emit('change', date);
          } else this.$emit('change', e);
        }
        if (this.type === 'time') {
          let h = e.split(':')[0];
          let m = e.split(':')[1];

          date = this.value;

          date = new Date(date);
          let str = date.getTimezoneOffset() / 60;
          date = new Date(date.setHours(h - str, m));
          console.log(date);
          if (typeof this.value === 'number') {
            this.$emit('change', +date);
          } else if (typeof this.value === 'object') {
            this.$emit('change', date);
          } else this.$emit('change', e);
        }
        if (this.type === 'datetime-local') {
          let str = date.getHours() - date.getTimezoneOffset() / 60;

          date = new Date(date.setHours(str));

          if (typeof this.value === 'number') {
            this.$emit('change', +date);
          } else if (typeof this.value === 'object') {
            this.$emit('change', date);
          } else this.$emit('change', e);
        }
      } else {
        this.$emit('change', null);
      }
    },
    valid(val, valType) {
      let valTypes = {
        date: () => moment(val, 'YYYY-MM-DD', true).isValid(),
        time: () => moment(val, 'HH:mm', true).isValid(),
        'datetime-local': () => moment(val, moment.ISO_8601).isValid(),
      };

      return valTypes[valType]();
    },
  },
};
</script>
