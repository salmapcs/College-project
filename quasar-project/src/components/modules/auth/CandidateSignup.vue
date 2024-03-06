<template>
    <q-form class="q-ma-md">
      <div>
        <h4 class="text-center text-weight-bold text-green-7">Create an Account</h4>

        <q-input outlined label="Email" />
        <q-input outlined label="Create Password" />
        <q-input outlined label="Confirm Password" />
        <br>
        
        <q-btn class="full-width" color="primary" label="Signup" @click="$router.replace('./login')" />

        <div class="row" style="display: flex; justify-content: center;">
          <div style="margin-right: 10px;">Already have an account ?</div>
          <div class="text-primary"  @click="$router.replace({query:{mode:'login', auth: $route?.query?.auth}})">Login</div>
        </div>
        <br>

        <div class="row flex flex-center" style="margin: 10px;">
        <q-separator color="grey-6" inset style="width: 200px;"/>
        <div class="row flex-center">Or</div>
        <q-separator color="grey-6" inset style="width: 200px;"/>
        <br>
      </div>
      <br>

        <q-btn @click="loginWithFacebook" class="full-width" color="indigo-6" label="Login with Facebook"></q-btn><br>
        <q-btn @click="loginWithGoogle" class="full-width" label="Login with Google">
        </q-btn>
      </div>
      
    </q-form>
  </template>
  
  <script>
  export default {
    methods: {
      
      signup() {
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
  