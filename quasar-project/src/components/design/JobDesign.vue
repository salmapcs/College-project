<template>
    <q-page padding>
      <div v-for="job in jobs" :key="job.id" class="my-card-container">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="row items-start">
              <div class="col-auto">
                <q-img :src="job.logo" style="width: 50px; height: 50px;" />
              </div>
              <div class="col">
                <div class="text-h6">{{ job.title }}</div>
                <div class="text-caption text-grey">{{ job.company }}</div>
              </div>
              <div class="col-auto">
                <q-icon name="chevron_right" />
              </div>
            </div>
          </q-card-section>
  
         
  
          <q-card-section>
            <div class="row">
              <div class="col-auto">
                <q-icon name="place" class="text-grey" />
              </div>
              <div class="col">
                <div class="text-subtitle2">{{ job.location }}</div>
              </div>
            </div>
            <div class="row">
              <div class="col-auto">
                <q-icon name="attach_money" class="text-grey" />
              </div>
              <div class="col">
                <div class="text-subtitle2">{{ job.salary }}</div>
              </div>
            </div>
          </q-card-section>
  
       
  
          <q-card-section>
            <div class="row q-gutter-sm">
              <q-chip outline dense v-for="tag in job.tags" :key="tag.text" :icon="tag.icon">{{ tag.text }}</q-chip>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'JobCards',
    data() {
      return {
        jobs: [
          {
            id: 1,
            logo: '/public/icons/download.png',
            title: 'Junior Consultant',
            company: 'Motherhood India',
            location: 'Kalyan Nagar, Bengaluru/Bangalore',
            salary: '₹120,000 - ₹149,999 monthly',
            tags: [
              { icon: 'work', text: 'Full Time' },
              { icon: 'person', text: 'Freshers only' },
              { icon: 'language', text: 'Good (Intermediate / Advanced) English' }
            ]
          },
          {
            id: 2,
            logo: '/public/icons/download.png',
            title: 'Senior Developer',
            company: 'Tech Solutions',
            location: 'Whitefield, Bengaluru/Bangalore',
            salary: '₹200,000 - ₹249,999 monthly',
            tags: [
              { icon: 'work', text: 'Full Time' },
              { icon: 'laptop', text: 'Remote possible' },
              { icon: 'language', text: 'Excellent English' }
            ]
          },
          {
            id: 3,
            logo: '/public/icons/download.png',
            title: 'Marketing Specialist',
            company: 'Creative Minds',
            location: 'MG Road, Bengaluru/Bangalore',
            salary: '₹80,000 - ₹99,999 monthly',
            tags: [
              { icon: 'work', text: 'Part Time' },
              { icon: 'event', text: 'Contract' },
              { icon: 'language', text: 'Fluent English' }
            ]
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  .my-card {
    width: 100%;
    max-width: 600px;
    margin: auto;
    margin-bottom: 20px;
  }
  </style>
  