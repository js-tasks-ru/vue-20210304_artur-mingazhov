export default {
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      defaultCount: 0,
    };
  },

  computed: {

  },
  template: '<button type="button" @click="$emit(`increment`, count+1)">{{count}}</button>',
};
