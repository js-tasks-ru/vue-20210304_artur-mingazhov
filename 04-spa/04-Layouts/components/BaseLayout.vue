<template>
  <div>
    <the-header></the-header>
    <slot />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';
export default {
  components: { TheFooter, TheHeader },
  name: 'BaseLayout',
};
</script>

<style scoped>
main {
  flex: 1 0 auto;
}
</style>
