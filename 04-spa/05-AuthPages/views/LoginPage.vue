<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input v-model="user.email" type="email" placeholder="demo@email" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input v-model="user.password" type="password" placeholder="password" class="form-control" />
      </div>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary button_block">Войти</button>
    </div>
    <div class="form__append">
      Нет аккаунта?
      <router-link to="/register" class="link">Зарегистрируйтесь</router-link>
    </div>
  </form>
</template>

<script>
import { login } from '../data';

export default {
  name: 'LoginPage',

  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },

  methods: {
    submitForm() {
      if (this.user.email === '') {
        alert('Требуется ввести Email');
        return;
      } else if (this.user.password === '') {
        alert('Требуется ввести пароль');
        return;
      }

      login(this.user.email, this.user.password).then((res) => {
        if (res.fullname !== undefined) {
          alert(res.fullname);
          if (this.$route.query.from !== undefined) {
            this.$router.push(this.$route.query.from);
          } else {
            this.$router.push('/');
          }
        } else alert(res.message);
      });
    },
  },
};
</script>

<style></style>
