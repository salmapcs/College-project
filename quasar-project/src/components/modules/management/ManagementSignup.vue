<template>
  <q-form class="q-ma-md">
    <h4 class="text-center text-weight-bold text-purple-8">Create an Account to Jobzen</h4>
    <h4 class="text-center text-weight-bold text-primary">Signup</h4>
    <q-input outlined label="Email" v-model="auth.email" />
    <q-input outlined label="Password" v-model="auth.password" />
    <q-input outlined label="Confirm Password" v-model="auth.confirmPassword" />
    <br>
    <q-btn class="full-width" color="primary" label="Signup" @click="signup" />
    <div class="text-primary" style="text-align: right;" @click="redirectToLogin">Login</div>
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
    async signup() {
      try {
  
        let httpClient = await this.$api.post('/auth/login', this.auth);
        console.log(httpClient.data);
        this.$router.replace({ path: '/management/auth/login', query: {} });

      } catch (error) {
        console.error('Signup failed:', error);
      }
    },
    redirectToLogin() {
      this.$router.replace('/management/auth/login');
    }
  }
};
</script>
