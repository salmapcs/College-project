<template>
    <q-page class="bg-grey-1">
      <div class="row">
        <div class="col-4 q-pa-md" v-if="$route.params.mode">
          <q-card class="q-pa-md">
            <router-view></router-view>
  
          </q-card>
  
        </div>
        <div class="q-pa-md" :class="{ 'col-8': $route.params.mode, 'col-12': !$route.params.mode }">
          <ApplicationsTable />
        </div>
      </div>
    </q-page>
  </template>
  <script>
  import ApplicationsTable from 'components/modules/management/Jobs/JobApplications/Table.vue'
  export default {
    components: { ApplicationsTable }
  }
  </script>
