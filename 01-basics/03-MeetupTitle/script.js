import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
   el: '#app',
   data() {
      return {
         picked: null,
         title: ""
      }
   },
   watch: {
      picked() {
         fetch(
            `https://course-vue.javascript.ru/api/meetups/${this.picked}`
         ).then(res => res.json())
            .then(i => { this.title = i.title })
      }
   },
})

app.$mount('#app');