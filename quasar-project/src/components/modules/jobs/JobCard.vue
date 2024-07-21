<template>
    <q-card flat bordered class="q-mb-md">
      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col-auto">
            <q-avatar>
              <img src="/public/icons/download.png" alt="Company Logo">
            </q-avatar>
          </div>
          <div class="col">
            <div class="text-h6">{{ title }}</div>
            <div class="text-subtitle2">{{ company }}</div>
            <div class="text-caption"><i class="fa fa-map-marker-alt"></i> {{ location }}</div>
            <div class="text-caption"><i class="fa fa-money-bill-wave"></i> {{ salary }}</div>
            <div class="row items-center">
              <q-badge color="grey-4" text-color="black" class="q-mr-sm">{{ type }}</q-badge>
              <q-badge color="grey-4" text-color="black" class="q-mr-sm">{{ jobType }}</q-badge>
              <q-badge color="grey-4" text-color="black" class="q-mr-sm">{{ experience }}</q-badge>
              <q-badge color="grey-4" text-color="black">{{ language }}</q-badge>
            </div>
          </div>
          <div class="col-auto">
            <q-btn icon="chevron_right" flat dense />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      company: String,
      location: String,
      salary: String,
      type: String,
      jobType: String,
      experience: String,
      language: String
    }
  };
  </script>
  
  <style scoped>
  .q-mb-md {
    margin-bottom: 1rem;
  }
  </style>
  