<template>


    <q-form class="q-ma-lg">
  
      <h4 class="text-center text-weight-bold text-purple-8">Welcome to jobzen</h4>
      <h4 class="text-center text-weight-bold text-primary">Login</h4>
      <q-input outlined label="Email" v-model="auth.email" />
      <q-input outlined label="Password" v-model="auth.password" />
      <br>
  <!-- 
      <div class="text-primary" @click="$router.replace('./ForgotPassword')" style="text-align: center;">Forgot
        Password?
      </div> -->
      <q-btn class="full-width" color="primary" label="LOGIN" @click="login" />
  
  
      <div class="text-primary" @click="$router.replace('/management/auth/signup')">Signup</div>
  
  
    </q-form>
  
  </template>
  <script>
  
  export default {
    data () {
      return {
        auth: {},
        icon: true
      };
  
  
    },
    methods: {
      async login () {
        this.$api.defaults.headers.common['Authorization'] = null
        let httpRequest = await this.$api.post('/auth/login', this.auth)
        console.log(httpRequest)
        let access_token = httpRequest.data.data.access_token
        this.$api.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        localStorage.setItem('access_token', access_token)
        this.$router.replace({ path: '/management', query: {} })
      },
      closeDialog () {
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
  