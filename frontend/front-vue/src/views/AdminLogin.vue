<template>
  <div class="admin-login">
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" class="form-control" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" v-model="password" required />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AdminLogin',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['adminLogin']),
    async login() {
      try {
        await this.adminLogin({ email: this.email, password: this.password });
        this.$router.push('/admin-panel');
      } catch (error) {
        this.$swal('Error', 'Invalid credentials', 'error');
      }
    },
  },
};
</script>

<style scoped>
.admin-login {
  max-width: 400px;
  margin: 50px auto;
}
</style>
