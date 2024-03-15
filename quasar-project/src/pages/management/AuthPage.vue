<template>
  <q-page class="flex flex-center authpage">
    <q-card class="relative-position">
      <!-- <img class="absolute" src="~/assets/managehome.png" style="width:100%;height:100%" /> -->
      <router-view />
    </q-card>

  </q-page>
</template>
<style scoped>
.authpage {
  background: url('/managehome.png')
}
</style>
<script>
export default {

}
</script>
