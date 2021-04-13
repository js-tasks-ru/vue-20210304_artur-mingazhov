<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input v-model="user.email" type="email" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input v-model="user.fullName" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input v-model="user.password" type="password" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input v-model="user.password_repeat" type="password" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="checkbox"
        ><input v-model="user.agreement" type="checkbox" /> Я согласен с условиями <span></span
      ></label>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary">Зарегистрироваться</button>
    </div>
    <div class="form__append">
      Уже есть аккаунт?
      <router-link to="/login" class="link">Войдите</router-link>
    </div>
  </form>
</template>

<script>
import { register } from '../data';

const errorTypes = {
  fullName: 'Требуется ввести полное имя',
  email: 'Требуется ввести Email',
  password: 'Требуется ввести пароль',
  password_repeat: 'Пароли не совпадают',
  agreement: 'Требуется согласиться с условиями',
};

export default {
  name: 'RegisterPage',

  data() {
    return {
      user: {
        fullName: '',
        email: '',
        password: '',
        password_repeat: '',
        agreement: false,
      },
    };
  },

  methods: {
    submitForm() {
      if (this.isFormValidated()) {
        register(this.user.email, this.user.fullName, this.user.password).then((res) => {
          if (res.id !== undefined) {
            alert(res.id);
            this.$router.push('/login');
          } else {
            alert(res.message);
          }
        });
      }
    },

    isFormValidated() {
      let err = null;

      if (this.user.email === '') err = 'email';
      else if (this.user.fullName === '') err = 'fullName';
      else if (this.user.password === '') err = 'password';
      else if (this.user.password !== this.user.password_repeat) err = 'password_repeat';
      else if (!this.user.agreement) err = 'agreement';

      if (err) {
        alert(errorTypes[err]);
        return false;
      }

      return true;
    },
  },
};
</script>

<style></style>
