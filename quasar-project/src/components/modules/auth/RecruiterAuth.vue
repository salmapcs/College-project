<template>

  
    <RecruiterLogin v-if="mode==='login'"/>
    <RecruiterSignup v-if="mode==='signup'"/>
    <ForgotPasswod v-if="mode==='forgotpassword'"/>
  
 
</template>

<script>
import RecruiterLogin from './RecruiterLogin.vue'
import RecruiterSignup from './RecruiterSignup.vue'
import ForgotPassword from './ForgotPassword.vue'
export default {
  components: {RecruiterLogin, RecruiterSignup, ForgotPassword},
  props: ['mode']
}
</script>
