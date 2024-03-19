<template>
    <q-form class="">
      <q-card class="q-pa-md login-form"style="border-radius: 20px;width: 500px;height: 370px;margin-right: 100px;">
      
        <h4 class="text-left  text-weight-bold text-grey-10" style="font-size: 30px;">Employer Login/Sign Up</h4>
        <q-input outlined label="Email" v-model="auth.email"/>
        <q-input outlined label="Password" v-model="auth.password"/><br><br>
  
        <div class="text-green-9" @click="$router.replace('./ForgotPassword')" style="text-align: center;">Forgot Password?</div>
        <q-btn class="full-width" color="green-10" label="LOGIN"@click="login"/>
  
  
        <div class="row" style="display: flex; justify-content: center;">
          <div style="margin-right: 10px;">Don't have an account ?</div>

          <div class="text-green-9" @click="$router.replace('/recruiter/auth/signup')">Signup</div>
        </div><br>
        
        
      
    </q-card>
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
    //   async login () {
    //   let httpRequest = await this.$axios.post('http://localhost:8055/auth/login', this.auth)
    //   console.log(httpRequest)
    //   let access_token = httpRequest.data.data.access_token
    //   this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    //   localStorage.setItem('access_token', access_token)
    // },



    //   redirectToHome() {
    //   this.$router.push('/recruiter');
    // },
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
  