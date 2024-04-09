<template>
    <q-form>
      <q-card class="q-pa-md login-form"style="border-radius: 20px;width: 500px;height: 390px;margin-right: 100px;padding: 30px;">
      
        <h4 class="text-left  text-weight-bold text-grey-10" style="font-size: 30px;margin-top: 19px;">Employer Login/Sign Up</h4>
        <q-input outlined label="Email" v-model="auth.email"/><br>
        <q-input outlined label="Password" v-model="auth.password"/><br>
  
        <div class="text-green-9" @click="$router.replace('./ForgotPassword')" style="text-align: center;">Forgot Password?</div>
        <q-btn class="full-width" color="green-10" :label="authSuccess ? 'Success' : 'Login'" style="width:100%"
            :color="authSuccess ? 'green-10' : 'primary'" @click="login" :disabled="authInProgress || authSuccess"
            :loading="authInProgress"/>
  
        <div class="row" style="display: flex; justify-content: center;">
          <div style="margin-right: 10px;">Don't have an account ?</div>

          <div class="text-green-9" @click="$router.replace('./signup')">Signup</div>
        </div><br>
        
        
      
    </q-card>
    </q-form>
  </template>
  
  <script>
  export default {
    data () {
      return {
        auth: {},
        authInProgress: false,
      authSuccess: false
      }
    },
    methods: {
      async login () {
      this.$api.defaults.headers.common['Authorization'] = null;
      this.authInProgress = true
      try{
      let httpRequest
      
        httpRequest = await this.$api.post('/recruiter/auth/login', this.auth)
       this.authSuccess = true
      this.authInProgress = false
      let access_token = httpRequest.data.data.access_token
      this.$api.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      localStorage.setItem('access_token', access_token)

      this.$mitt.emit('login-successfull')
      setTimeout(() => {
        this.$router.replace('/recruiter')
      }, 1000)
    } catch (err) {
        alert('Some Error Occurred')
        this.authInProgress = false
      }
 },



      redirectToHome() {
      this.$router.push('/recruiter');
    },
      login(){
        this.$router.replace('/recruiter')
      },
      ForgotPassword() {
        console.log("Forgot Password clicked");
      },
      signUp() {
        console.log("Signup clicked");
      },
      loginWithFacebook() {
        console.log("Login with Facebook clicked");
      },
      loginWithGoogle() {
          console.log("Login with Google clicked");
        }
    }
  }
  </script>
  <style>
.login-form{
  box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 30px -20px;
  font-family: Inter, sans-serif;
  border: 2px solid rgba(0, 0, 0, 0.08);
}
#root{
  --animate-duration: 1s;
    --animate-delay: 1s;
    --animate-repeat: 1;
}

</style>
  