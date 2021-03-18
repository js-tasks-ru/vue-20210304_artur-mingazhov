
import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
   el: '#app',
   data() {
      return {
         picked: null,
         title: ""
      }
   },
   methods: {
      async f(i) {
         let us = await fetch(
            `https://course-vue.javascript.ru/api/meetups/${i}`
         );
         let res = await us.json();
         this.title = res.title
      },
   },


})

app.$mount('#app');