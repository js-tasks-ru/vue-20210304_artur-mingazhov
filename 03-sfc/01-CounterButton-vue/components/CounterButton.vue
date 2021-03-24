<template>
  <div>
    <button type="button" @click="$emit(`increment`, count + 1)">{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style></style>
