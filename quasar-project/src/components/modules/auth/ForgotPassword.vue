<template>

    <q-form class="q-ma-md">
      <div>
        <h4 class="text-center">Forgot Password</h4>

        <div class="row" style="display: flex; justify-content: center;">
            <div style="text-align: center;">Please provide the email address that you used when you signed up for your account.</div>
        <div >  
        <p >If you forgot your email, please<span class="text-green-6"> contact us.</span></p></div>
        </div>  
      
        <q-input v-model="Text" color= "green-6" label="Email Address"/>
        <br>
        <p style="text-align: center;">We will send you an email that will allow you to reset your password.</p>
        <br>
        <div class="row" style="display: flex; justify-content: center;">
        <q-btn class="full-width" color="green-6" label="Reset Password" />
        </div>
  
        <div class="row" style="display: flex; justify-content: center;">
          <div style="margin-right: 10px;">New here? </div>
          <div class="text-green-6" @click="$router.replace('./signup')">Sign Up</div>
        </div>

        <div class="row" style="display: flex; justify-content: center;">
          <div style="margin-right: 10px;">Already have an account? </div>
          <div class="text-green-6" @click="$router.replace('./login')">Login.</div>
        </div>
      </div>
    </q-form>
  </template>
  
  <script>
  export default {
    methods: {
      login(){
      this.$router.replace('/')
    },
      ForgotPassword() {
        console.log("Reset Password clicked");

      }
    }
  }
  </script>
  