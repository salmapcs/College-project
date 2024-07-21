<template>
    <q-page class="q-pa-md">
      <q-toolbar>
        <q-toolbar-title>Home Page</q-toolbar-title>
      </q-toolbar>
      <div class="row justify-center">
        <q-btn label="Go to Jobs" @click="goToJobs" />
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    methods: {
      goToJobs() {
        this.$router.push('/jobs');
      }
    }
  };
  </script>
  
  <style scoped>
  .q-pa-md {
    padding: 1rem;
  }
  </style>
  