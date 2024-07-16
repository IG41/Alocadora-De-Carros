<template>
  <div class="user-signup">
    <form @submit.prevent="signup">
      <div class="form-group">
        <label for="username">Username</label>
        <input id="username" type="text" class="form-control" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" class="form-control" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" v-model="password" required />
      </div>
      <button type="submit" class="btn btn-primary">Signup</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UserSignup',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['signup']),
    async signup() {
      try {
        await this.signup({ username: this.username, email: this.email, password: this.password });
        this.$router.push('/login'); // Redirect to login page after successful signup
      } catch (error) {
        this.$swal('Error', 'Could not sign up', 'error');
      }
    },
  },
};
</script>

<style scoped>
.user-signup {
  max-width: 400px;
  margin: 50px auto;
}
</style>
