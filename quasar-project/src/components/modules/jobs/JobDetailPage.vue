<template>
    <q-page class="q-pa-md">
      <div class="row">
        <!-- Job Details Section -->
        <div class="col-12 col-md-9">
          <q-card class="q-mb-md">
            <q-card-section>
              <div class="row no-wrap items-center">
                <div class="col-auto">
                  <img src="/public/icons/download.png" alt="company logo" style="width: 64px; height: 64px;">
                </div>
                <div class="col">
                  <div class="text-bold text-h5">Senior Civil Project Manager</div>
                  <div>Luxuria Homes</div>
                  <div class="q-mb-sm"><i class="fa-solid fa-location-dot"></i> Halasahalli, Bengaluru/Bangalore</div>
                  <div class="q-mb-sm"><i class="fa-solid fa-money-bill-1-wave"></i> ₹30,000 - ₹149,999 monthly</div>
                </div>
              </div>
              <div class="q-mb-md">
                <div><strong>Fixed</strong></div>
                <div>₹30,000 - ₹149,999</div>
              </div>
              <div class="q-mb-md">
                <div><strong>Earning Potential</strong></div>
                <div>₹149,999</div>
              </div>
              <div class="q-mb-md">
                <div class="req bg-grey-4 q-mr-sm">Work from Office</div>
                <div class="req bg-grey-4 q-mr-sm">Full Time</div>
                <div class="req bg-grey-4 q-mr-sm">Min. 5 years</div>
                <div class="req bg-grey-4 q-mr-sm">Good (Intermediate / Advanced) English</div>
              </div>
              <q-btn label="Apply for job" color="primary" class="q-mb-md" />
              <q-btn label="Share" color="secondary" outline class="q-mb-md" />
            </q-card-section>
          </q-card>
          <q-card class="q-mb-md">
            <q-card-section>
              <div class="text-bold text-h6">Job highlights</div>
              <div class="q-mb-sm"><i class="fa-solid fa-fire"></i> Urgently hiring</div>
              <div class="q-mb-sm"><i class="fa-solid fa-users"></i> 78 applicants</div>
            </q-card-section>
          </q-card>
        </div>
  
        <!-- Similar Jobs Section -->
        <div class="col-12 col-md-3">
          <q-card class="q-mb-md">
            <q-card-section>
              <div class="text-bold">Get your dream job in 3 simple steps:</div>
              <div class="q-mb-md"><i class="fa-solid fa-briefcase"></i> Apply for job</div>
              <div class="q-mb-md"><i class="fa-solid fa-user"></i> Create profile</div>
              <div class="q-mb-md"><i class="fa-solid fa-phone"></i> Schedule interview</div>
              <div class="q-mb-md"><i class="fa-solid fa-rocket"></i> Get hired</div>
            </q-card-section>
          </q-card>
          <q-card class="q-mb-md" v-for="job in similarJobs" :key="job.title">
            <q-card-section>
              <div class="text-bold">{{ job.title }}</div>
              <div>{{ job.company }}</div>
              <div class="q-mb-sm"><i class="fa-solid fa-location-dot"></i> {{ job.location }}</div>
              <div class="q-mb-sm"><i class="fa-solid fa-money-bill-1-wave"></i> {{ job.salary }}</div>
              <div class="req bg-grey-4 q-mr-sm" v-for="req in job.requirements" :key="req">{{ req }}</div>
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
        similarJobs: [
          {
            title: 'Civil Design Engineer',
            company: 'Sri Raja Rajeswari Constructions India',
            location: 'Bilekahalli, Bengaluru/Bangalore',
            salary: '₹20,000 - ₹25,000 monthly',
            requirements: ['Field Job', 'Full Time', 'Min. 1 year', 'Intermediate English']
          },
          {
            title: 'Quantity Surveyor',
            company: 'Aarna Infratech India Private Limited',
            location: 'Banashankari, Bengaluru/Bangalore',
            salary: '₹50,000 - ₹60,000 monthly',
            requirements: ['Work from Office', 'Full Time', 'Min. 10 years', 'Advanced English']
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
  