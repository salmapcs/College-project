<template>
    <q-form class="flex flex-center" style="width: 500px; height: 500px;">
      <div class="q-gutter-sm" style="width: 500px; height: 300px;">
        <h4 class="text-center">Signup</h4>

        <q-input outlined label="Email" />
        <q-input outlined label="Create Password" />
        <q-input outlined label="Confirm Password" />
        <br>
        
        <q-btn style="width: 500px; height: 30px; text-align: center;" class="btn-fixed-width" color="primary" label="Signup" />

        <div class="row" style="display: flex; justify-content: center;">
          <div style="margin-right: 10px;">Already have an account ?</div>
          <div class="text-primary">Login</div>
        </div>
        <br>

        <div class="row flex flex-center" style="margin: 10px;">
        <q-separator color="grey-6" inset style="width: 200px;"/>
        <div class="row flex-center">Or</div>
        <q-separator color="grey-6" inset style="width: 200px;"/>
        <br>
      </div>
      <br>

        <q-btn @click="loginWithFacebook" style="width: 500px;" color="indigo-6" label="Login with Facebook"></q-btn><br>
        <q-btn @click="loginWithGoogle" style="width: 500px;" label="Login with Google"></q-btn>
      </div>
      
    </q-form>
  </template>
  
  <script>
  export default {
    methods: {
      forgotPassword() {
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
  