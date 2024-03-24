<template>
  <q-avatar>
    <img :src="'http://localhost:8055/assets/' + profile?.avatar">
    <q-menu>
      <div class="column items-center q-my-md" style="width:150px">

        <div class="text-h6">{{ profile?.first_name }} {{ profile?.last_name }}</div>
        <div class="text-grey">{{ profile?.email }}</div>
        <q-btn class="q-my-md" unelevated flat label="Logout" @click="logout"></q-btn>
      </div>
      <div>

      </div>
    </q-menu>
  </q-avatar>
</template>
<script>
export default {
  data () {
    return {
      profile: null
    }
  },
  methods: {
    async logout () {

      this.$api.defaults.headers.common['Authorization'] = '';
      localStorage.removeItem('access_token')
      this.$router.push('/recruiter/auth/login')

    },
    async fetchProfile () {
      let httpClient = await this.$api.get('/users/me')
      this.profile = httpClient.data.data
    }
  },
  created () {
    this.$mitt.on('login-successful', this.fetchProfile)
    this.fetchProfile()
  }
}
</script>
