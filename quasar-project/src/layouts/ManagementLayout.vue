<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="bg-green-10">
      <q-toolbar>
        <q-btn icon="menu" unelevated @click="openDrawer = !openDrawer"></q-btn>
        Management Interface
      </q-toolbar>
    </q-header>
    <q-drawer v-model="openDrawer" show-if-above bordered width="250" color="bg-grey-4" style="font-size: larger; font-weight: 700;">
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
