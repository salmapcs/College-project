<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  created () {
    let self = this
    let access_token = localStorage.getItem('access_token')
    if (access_token) {
      self.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    }

  }
})
</script>
