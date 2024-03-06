<template>
<q-btn icon="mdi-account-circle" @click=" showLogin = true">
    Candidate Login
    <q-dialog v-model=" showLogin">
      <q-card>
        <CandidateLogin></CandidateLogin>
      </q-card>
    </q-dialog>
  </q-btn>
</template>
<script>
import CandidateLogin from 'src/components/modules/auth/CandidateLogin.vue';
export default {
    components: {CandidateLogin},
    data(){
        return{
            showLogin: false,
        }
    }
}
</script>