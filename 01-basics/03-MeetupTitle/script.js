
import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
   el: '#app',
   data() {
      return {
         picked: "",
         arr: null,
         filterArr: null,
      }
   },
   async mounted() {
      let us = await fetch(
         `https://course-vue.javascript.ru/api/meetups/`
      );
      this.arr = await us.json();

   },
   watch: {
      arr() {
         this.filterArr = this.arr.filter((i, indx) => indx < 5 ? ({
            id: i.id,
            title: i.title
         }) : false)
      }
   },

   methods: {
   },
   computed: {
   }
})

app.$mount('#app');