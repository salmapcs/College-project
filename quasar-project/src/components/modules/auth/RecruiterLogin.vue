<template>
    <q-form class="q-ma-md">
      <q-card class="q-pa-md ">
      <div >
        <h4 class="text-center text-weight-bold text-green-8">Employer Login</h4>
        <q-input outlined label="Email" />
        <q-input outlined label="Password" />
  
        <div class="text-primary" @click="$router.replace('./ForgotPassword')" style="text-align: center;">Forgot Password?</div>
        <q-btn class="full-width" color="primary" label="LOGIN" @click="login"/>
  
  
        <div class="row" style="display: flex; justify-content: center;">
          <div style="margin-right: 10px;">Don't have an account ?</div>
          <div class="text-primary" @click="$router.replace('./signup')">Signup</div>
        </div><br>
        
        <div class="row flex flex-center" style="margin: 10px;">
        <q-separator color="grey-6" inset style="width: 200px;"/>
        <div class="row flex-center">Or</div>
        <q-separator color="grey-6" inset style="width: 200px;"/>
        <br>
      </div><br>
        <q-btn @click="loginWithFacebook" class="full-width" color="indigo-6" label="Login with Facebook"></q-btn><br>
        <q-btn @click="loginWithGoogle" class="full-width" label="Login with Google"></q-btn>
      </div>
    </q-card>
    </q-form>
  </template>
  
  <script>
  export default {
    methods: {
      login(){
        this.$router.replace('/')
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
  