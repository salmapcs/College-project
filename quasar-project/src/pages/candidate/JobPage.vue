<template>
    <q-page class="q-pa-md">
      <q-toolbar class="q-mb-md">
        <q-toolbar-title>500+ Freshers jobs</q-toolbar-title>
      </q-toolbar>
      <div class="row">
        <!-- Filters Section -->
        <div class="col-12 col-md-3 q-mb-md">
          <q-card flat bordered>
            <q-card-section>
              <q-item>
                <q-item-section>
                  <q-item-label>Filters</q-item-label>
                </q-item-section>
              </q-item>
            </q-card-section>
            <q-expansion-item icon="filter_list" label="Sort By" expand-separator>
              <q-radio label="Relevant" val="relevant" v-model="sortBy" />
              <q-radio label="Salary - High to low" val="salary_desc" v-model="sortBy" />
              <q-radio label="Date posted - New to Old" val="date_desc" v-model="sortBy" />
            </q-expansion-item>
            <q-expansion-item icon="experience" label="Experience" expand-separator>
              <q-range v-model="experience" color="primary" label-always />
            </q-expansion-item>
          </q-card>
        </div>
  
        <!-- Jobs Section -->
        <div class="col-12 col-md-9">
          <JobCard
            title="ITI Trainee"
            company="Spectrum Talent Management"
            location="Ahmedabad"
            salary="₹12,000 - ₹140,000 monthly"
            type="Work from Office"
            jobType="Full Time"
            experience="Freshers only"
            language="No English Required"
          />
          <JobCard
            title="Real Estate Sales Executive"
            company="Square Yards"
            location="Sampangiram Nagar, Bengaluru/Bangalore"
            salary="₹20,800 - ₹149,999 monthly*"
            type="Work from Office"
            jobType="Full Time"
            experience="Freshers only"
            language="Good (Intermediate / Advanced)"
          />
        </div>
      </div>
    </q-page>
  </template>
  
  <script>
  import JobCard from './JobCard.vue';
  
  export default {
    components: {
      JobCard
    },
    data() {
      return {
        sortBy: 'relevant',
        experience: [0, 20]
      };
    }
  };
  </script>
  
  <style scoped>
  .q-pa-md {
    padding: 1rem;
  }
  .q-mb-md {
    margin-bottom: 1rem;
  }
  </style>
  