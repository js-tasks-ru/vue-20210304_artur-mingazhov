
import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
   el: '#app',
   data() {
      return {
         picked: null,
         arr: null
      }
   },
   async mounted() {

      let us = await fetch(
         `https://course-vue.javascript.ru/api/meetups/`
      );
      this.arr = await us.json();
   },

   computed: {
      title() {
         if (this.picked === null) return "";
         return this.arr[this.picked].title
      }
   }
})

app.$mount('#app');