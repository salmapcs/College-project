<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-green-10">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Job Hire
        </q-toolbar-title>

        <AvatarBtn></AvatarBtn>


      </q-toolbar>
    </q-header>

    <q-drawer class="bg-grey-1" v-model="leftDrawerOpen" show-if-above bordered :width="250">

      <q-list>
        <q-item-label header>
          Company Name
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>


</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import AvatarBtn from 'components/design/AvatarLogin.vue'


const linksList = [
  {
    title: 'Jobs',
    icon: 'person',

  },
  {
    title: 'Search Candidates',
    icon: 'person_search',
  },
  {
    title: 'Saved Searches',
    icon: 'saved_search',
  },
  {
    title: 'Unlock Candidates',
    icon: 'lock_open',
  },
  {
    title: 'Report',
    icon: 'assessment',
  },
  {
    title: 'Database',
    icon: 'manage_accounts',
  }

]
export default defineComponent({
  name: 'MainLayout',

  components: { EssentialLink, AvatarBtn },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})


</script>
