<template>
  <div class="meetups-list">
    <slot v-for="item in items" :item="item" />
  </div>
</template>

<script>
export default {
  name: 'ListView',

  props: {
    items: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style scoped>
.meetups-list {
}
</style>
