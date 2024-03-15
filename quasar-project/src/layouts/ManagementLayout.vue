<template>
  <q-layout view="lHh Lpr fFf">
    <q-header>
      <q-toolbar>
        <q-btn icon="menu" unelevated @click="openDrawer = !openDrawer"></q-btn>
        Managment Interface
      </q-toolbar>
    </q-header>
    <q-drawer v-model="openDrawer" show-if-above bordered>
      <MenuVertical>
      </MenuVertical>
    </q-drawer>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>
<script>
import MenuVertical from 'components/MenuVertical.vue';

export default {
  components: { MenuVertical },
  data () {
    return {
      openDrawer: true
    }
  }
}
</script>
