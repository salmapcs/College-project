<template>
  <q-form class="q-ma-lg">
    <h4 class="text-center text-weight-bold text-purple-8">Welcome to Jobzen</h4>
    <h4 class="text-center text-weight-bold text-primary">Login</h4>
    <q-input outlined label="Email" v-model="auth.email" />
    <q-input outlined label="Password" v-model="auth.password" />
    <br>
    <q-btn class="full-width" color="primary" label="LOGIN" @click="login" />
    <div class="text-primary" @click="redirectToSignup">Signup</div>
  </q-form>
</template>

<script>
export default {
  data() {
    return {
      auth: {}
    };
  },
  methods: {
    async login() {
      try {
        this.$api.defaults.headers.common['Authorization'] = null;
        let httpRequest = await this.$api.post('/auth/login', this.auth);
        let access_token = httpRequest.data.data.access_token;
        this.$api.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        localStorage.setItem('access_token', access_token);
        this.$router.replace({ path: '/management', query: {} });
      } catch (error) {
        console.error('Login failed:', error);
        // Handle login failure, show error message to the user, etc.
      }
    },
    redirectToSignup() {
      this.$router.replace('/management/auth/signup');
    }
  }
};
</script>
