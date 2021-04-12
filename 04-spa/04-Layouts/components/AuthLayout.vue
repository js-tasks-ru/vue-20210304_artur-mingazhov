<template>
  <div class="page">
    <div class="page_onboarding">
      <h2>{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  props: ['title'],
};
</script>

<style scoped>
.page .page_onboarding {
  max-width: 374px;
  width: 100%;
  margin: 0 auto;
}
</style>
