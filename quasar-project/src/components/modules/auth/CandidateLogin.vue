<template>
  <q-form style="width: 500px; height: 500px;">
    <div class="q-gutter-sm" style="width: 500px; height: 300px;">
      <h4 class="text-center">Candidate Login</h4>
      <q-input outlined label="Email" v-model="auth.email" />
      <q-input outlined label="Password" v-model="auth.password" />
      {{ auth }}
      <div class="text-primary" @click="$router.replace('./ForgotPassword')" style="text-align: center;">Forgot Password?
      </div>
      <q-btn style="width: 500px; height: 30px; text-align: center;" class="btn-fixed-width" color="primary" label="LOGIN"
        @click="login" />
      <q-btn style="width: 500px; height: 30px; text-align: center;" class="btn-fixed-width" color="primary"
        label="Fetch Products" @click="fetchProducts" />


      <div class="row" style="display: flex; justify-content: center;">
        <div style="margin-right: 10px;">Don't have an account ?</div>
        <div class="text-primary" @click="$router.replace('./signup')">Signup</div>
      </div><br>

      <div class="row flex flex-center" style="margin: 10px;">
        <q-separator color="grey-6" inset style="width: 200px;" />
        <div class="row flex-center">Or</div>
        <q-separator color="grey-6" inset style="width: 200px;" />
        <br>
      </div><br>
      <q-btn @click="loginWithFacebook" style="width: 500px;" color="indigo-6" label="Login with Facebook"></q-btn><br>
      <q-btn @click="loginWithGoogle" style="width: 500px;" label="Login with Google"></q-btn>
    </div>
  </q-form>
</template>

<script>
export default {
  data () {
    return {
      auth: {},
    }
  },
  methods: {
    async login () {
      let httpRequest = await this.$axios.post('https://erp.eispl.org/auth/login', this.auth)
      console.log(httpRequest)
      let access_token = httpRequest.data.data.access_token
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      localStorage.setItem('access_token', access_token)
    },
    async fetchProducts () {
      let httpRequest2 = await this.$axios.get('https://erp.eispl.org/items/products')
      console.log(httpRequest2)
    },
    ForgotPassword () {
      console.log("Forgot Password clicked");
    },
    signUp () {
      console.log("Signup clicked");
    },
    loginWithFacebook () {
      console.log("Login with Facebook clicked");
    },
    loginWithGoogle () {
      console.log("Login with Google clicked");
    }
  }
}
</script>
<style></style>
