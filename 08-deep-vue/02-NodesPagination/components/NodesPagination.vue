<script>
export default {
  name: 'NodesPagination',

  render(h) {
    let content;

    if (this.$slots.default)
      content = this.$slots.default.slice(this.perPage * (this.page - 1), this.perPage * this.page);
    else content = '';

    return h('div', content);
  },
  props: {
    page: {
      type: Number,
    },
    perPage: {
      type: Number,
    },
  },
};
</script>
