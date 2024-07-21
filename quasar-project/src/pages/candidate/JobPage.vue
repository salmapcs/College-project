<template>
    <q-page class="q-pa-md">
      <div class="row">
        <div class="col-12 col-md-3">
          <h5>500+ Freshers jobs</h5>
          <q-card class="q-mb-md">
            <q-card-section>
              <h6>Filters</h6>
              <div class="q-mb-md">
                <label>Sort By</label>
                <q-radio v-model="sort" val="Relevant" label="Relevant" />
                <q-radio v-model="sort" val="Salary - High to low" label="Salary - High to low" />
                <q-radio v-model="sort" val="Date posted - New to Old" label="Date posted - New to Old" />
              </div>
              <div class="q-mb-md">
                <label>Experience</label>
                <q-slider v-model="experience" min="0" max="20" label-always />
              </div>
              <div class="q-mb-md">
                <label>Salary</label>
                <q-slider v-model="salary" min="0" max="150000" label-always />
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-6">
          <q-card class="q-mb-md" v-for="job in jobs" :key="job.title">
            <q-card-section>
              <div class="row no-wrap items-center">
                <div class="col-auto">
                  <img :src="job.image" alt="job image" style="width: 32px; height: 32px;">
                </div>
                <div class="col">
                  <div class="text-bold">{{ job.title }}</div>
                  <div>{{ job.company }}</div>
                </div>
              </div>
              <div>
                <div><i class="fa-solid fa-house"></i> {{ job.location }}</div>
                <div><i class="fa-solid fa-money-bill-1-wave"></i> {{ job.salary }}</div>
              </div>
              <div class="row">
                <div class="req bg-grey-4 q-mr-sm" v-for="req in job.requirements" :key="req">{{ req }}</div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-3">
          <img src="/side-image.jpg" alt="Create Profile" class="q-mb-md">
          <q-card class="q-mb-md">
            <q-card-section>
              <div>Login with Apna and experience more!</div>
              <ul>
                <li>Personalised job matches</li>
                <li>Direct connect with HRs</li>
                <li>Latest updates on the job</li>
              </ul>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sort: 'Relevant',
        experience: 0,
        salary: 0,
        jobs: [
          {
            image: '/public/icons/download.png',
            title: 'ITI Trainee',
            company: 'Spectrum Talent Management',
            location: 'Ahmedabad',
            salary: '₹12,000 - ₹140,000 monthly',
            requirements: ['Work from Office', 'Full Time', 'Freshers only', 'No English Required']
          },
          {
            image: '/public/icons/download.png',
            title: 'Real Estate Sales Executive',
            company: 'Square Yards',
            location: 'Sampangi Rama Nagar, Bengaluru/Bangalore',
            salary: '₹20,800 - ₹149,999 monthly',
            requirements: ['Work from Office', 'Full Time', 'Freshers only', 'Good (Intermediate / Advanced)']
          },
          {
            image: '/public/icons/download.png',
            title: 'Sales and Marketing Executive',
            company: 'Lilliaceae Medicare',
            location: 'Mumbai/Bombay',
            salary: '₹12,000 - ₹125,000 monthly',
            requirements: ['Field Job', 'Full Time', 'Freshers only', 'Basic English']
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .req {
    padding-top: 3px;
    height: 25px;
    width: 120px;
    border-radius: 10px;
    text-align: center;
    font-size: 12px;
  }
  .q-pa-md {
    padding: 1rem;
  }
  .q-mb-md {
    margin-bottom: 1rem;
  }
  </style>
  