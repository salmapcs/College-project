<template>
    <q-btn icon="mdi-account-circle" @click="$router.push({query:{auth:'yes', mode:'login'}})">
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
        components: {RecruiterAuth},
        computed:{
          showDialog(){
            return this.$route?.query?.auth === 'yes'
          },
          mode(){
            return this.$route?.query?.mode
          }
        },
        
    }
    </script>