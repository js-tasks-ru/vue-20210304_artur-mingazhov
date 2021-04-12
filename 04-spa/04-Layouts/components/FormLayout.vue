<template>
  <div class="page">
    <h2>{{ title }}</h2>
    <div class="page_meetup-forms">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormLayout',
  props: ['title'],
};
</script>

<style scoped>
.page .page_meetup-forms {
  padding: 70px 0;
}

@media all and (max-width: 992px) {
  .page .page_meetup-forms {
    padding: 48px 0;
  }
}
</style>
