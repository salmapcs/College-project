<template>
  <q-form class="q-ma-md">
    <q-btn
         icon="close" flat round dense @click="closeDialog" class="close-icon" />
    <div>
      
      <h4 class="text-center text-weight-bold text-green-8">Candidate Login</h4>
      <q-input outlined label="Email" v-model="auth.email" />
      <q-input outlined label="Password" v-model="auth.password" />
      <br>

      <div class="text-primary" @click="$router.replace('./ForgotPassword')" style="text-align: center;">Forgot
        Password?
      </div>
      <q-btn class="full-width" color="primary" label="LOGIN" @click="login" />



      <div class="row" style="display: flex; justify-content: center;">
        <div style="margin-right: 10px;">Don't have an account ?</div>

        <div class="text-primary" @click="$router.replace({ query: { mode: 'signup', auth: $route?.query?.auth } })">Signup
        </div>
      </div><br>

      <div class="row flex flex-center">
        <q-separator color="grey-6" inset style="width: 200px;" />
        <div class="row flex-center">Or</div>
        <q-separator color="grey-6" inset style="width: 200px;" />
        <br><br>
      </div><br>
      <q-btn @click="loginWithFacebook" class="full-width" color="indigo-6" label="Login with Facebook"></q-btn><br>
      <q-btn @click="loginWithGoogle" class="full-width" label="Login with Google"></q-btn>
    </div>
  </q-form>
</template>

<script>
import {ref} from 'vue'
export default {
  data () {
    return {
      auth: {},
      icon:ref(true)
    };
     
    
  },
  methods: {
    async login () {
      this.$axios.defaults.headers.common['Authorization'] = null
      let httpRequest = await this.$axios.post('http://localhost:8055/auth/login', this.auth)
      console.log(httpRequest)
      let access_token = httpRequest.data.data.access_token
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      localStorage.setItem('access_token', access_token)
     
    },
    closeDialog(){
      this.icon = true;
    },


    // goToSignUp() {
    //   this.$router.replace({
    //     query: { mode: 'signup', auth: this.$route?.query?.auth },
    //   });
    // },
    

    // async fetchProducts () {
    //   let httpRequest2 = await this.$axios.get('http://localhost:8055/items/products')
    //   console.log(httpRequest2)
    // },
    redirectToHome () {
      this.$router.push('/');
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
<style scoped>
.close-icon {
  

}
</style>
