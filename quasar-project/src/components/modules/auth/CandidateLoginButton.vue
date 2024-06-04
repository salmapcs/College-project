<template>
  <q-btn class="candi" icon="mdi-account-circle" color="green-10" @click="$router.push({ query: { auth: 'yes', mode: 'login', role: 'candidate' } })">
    Candidate Login
    <q-dialog v-model="showDialog">
      <q-card>
        <CandidateAuth :mode="mode"></CandidateAuth>
      </q-card>
    </q-dialog>
  </q-btn>
</template>
<script>
import CandidateAuth from 'src/components/modules/auth/CandidateAuth.vue';
export default {
  components: { CandidateAuth },
  computed: {
    showDialog () {
      console.log(this.$route)
      return this.$route?.query?.auth === 'yes' && this.$route?.query?.role === 'candidate'
    },
    mode () {
      return this.$route?.query?.mode
    }
  },
}
</script>
<style>

</style>