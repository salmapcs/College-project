<template>
  <q-btn icon="mdi-account-circle"
    @click="$router.push({ path: '/recruiter', query: { auth: 'yes', mode: 'login', role: 'recruiter' } })">
    Recruiter Login
    <q-dialog v-model="showDialog">
      <q-card>

        <RecruiterAuth :mode="mode"></RecruiterAuth>
      </q-card>
    </q-dialog>
  </q-btn>
</template>
<script>
import RecruiterAuth from 'src/components/modules/auth/RecruiterAuth.vue';
export default {
  components: { RecruiterAuth },
  computed: {
    showDialog () {
      return this.$route?.query?.auth === 'yes' && this.$route?.query?.role === 'recruiter'
    },
    mode () {
      return this.$route?.query?.mode
    }
  },

}
</script>
