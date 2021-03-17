import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
   el: '#app',
   data() {
      return {
         picked: "",
         arr: [],
      }

   },
   async created() {

      for (let i = 1; i < 6; i++) {
         let us = await fetch(
            `https://course-vue.javascript.ru/api/meetups/${i}`
         );
         let l = await us.json();
         const t = {
            id: l.id,
            title: l.title,
         }
         this.arr.push(t)

      }
      /*
          let us = await fetch(
             `https://course-vue.javascript.ru/api/meetups/1`
          );
          this.arr = await us.json();
    
    */
   },
   methods: {
      f() {
         alert(this.arr.title)
      },
   },
   computed: {
      async a() {

      }
   }

})

app.$mount('#app');