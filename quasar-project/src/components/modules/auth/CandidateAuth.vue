<template>
      <CandidateLogin v-if="mode==='login'"/>
      <CandidateSignup v-if="mode==='signup'"/>
      <ForgotPasswod v-if="mode==='forgotpassword'"/>
    
   
  </template>
  
  <script>
  import CandidateLogin from './CandidateLogin.vue'
  import CandidateSignup from './CandidateSignup.vue'
  import ForgotPassword from './ForgotPassword.vue'
  export default {
    components: {CandidateLogin, CandidateSignup, ForgotPassword},
    props: ['mode']
  }
  </script>
  