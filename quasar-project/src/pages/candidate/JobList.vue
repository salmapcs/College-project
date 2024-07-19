<template>
    <q-page class="q-pa-xl">
      <div class="row justify-around">
        <div class="col-12 col-md-3 q-mb-md">
          <h6>500 Search results</h6>
          <JobCard
            title="LIC Agent"
            company="Life Insurance Corporation"
            location="Work from home"
            salary="₹20,000 - ₹90,000 monthly*"
            type="Full Time"
            experience="Freshers only"
            language="No English Required"
          />
          <JobCard
            title="Data Analyst"
            company="Alembic Pharmaceuticals Ltd"
            location="Gorwa, Vadodara"
            salary="₹57,000 - ₹77,000 monthly*"
            type="Full Time"
            experience="Freshers only"
            language="No English Required"
          />
        </div>
        <div class="col-12 col-md-6 q-mb-md">
          <!-- Add any other content here -->
        </div>
        <div class="col-12 col-md-3 q-mb-md">
          <img src="/side-image.jpg" alt="Create Profile" class="full-width">
        </div>
      </div>
    </q-page>
  </template>
  
  <script>
  import JobCard from './JobCard.vue';
  
  export default {
    components: {
      JobCard
    }
  }
  </script>
  
  <style>
  .full-width {
    width: 100%;
  }
  
  .q-mb-md {
    margin-bottom: 1rem;
  }
  </style>
  