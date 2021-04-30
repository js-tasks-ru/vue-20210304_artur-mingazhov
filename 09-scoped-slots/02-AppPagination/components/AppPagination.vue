<template>
  <div>
    <slot v-for="item in currentPage" :item="item" />
  </div>
</template>

<script>
export default {
  name: 'AppPagination',
  props: {
    page: {
      type: Number,
    },

    perPage: {
      type: Number,
    },

    items: {
      type: Array,
    },
  },

  computed: {
    currentPage() {
      return this.items.slice(this.perPage * (this.page - 1), this.perPage * this.page);
    },
  },
};
</script>

<style></style>
