<template>
<q-form>

    <q-form class="q-ma-md">
      
      <h4 class="text-center text-weight-bold text-purple-8">Welcome to jobzen</h4>
      <h4 class="text-center text-weight-bold text-primary">Login</h4>
      <q-input outlined label="Email" v-model="auth.email" />
      <q-input outlined label="Password" v-model="auth.password" />
      <br>

      <div class="text-primary" @click="$router.replace('./ForgotPassword')" style="text-align: center;">Forgot
        Password?
      </div>
      <q-btn class="full-width" color="primary" label="LOGIN" @click="login" />



      <div class="row" style="display: flex; justify-content: center;">
        <div style="margin-right: 10px;">Don't have an account ?</div>

        <div class="text-primary" @click="$router.replace('/management')">Signup</div>
      </div>
    
  </q-form>
</q-form>
</template>
<script>
import {ref} from 'vue'
export default {
  data () {
    return {
        auth:{},
      
    }  
  }
}
</script>