<template>
  <q-page class="q-pa-lg bg-grey-2">
    <div class="row justify-center">

      <div class="col-12 col-md-9 text-grey-8">
        <div class="row">
          <div class="text-h5 text-bold q-my-md">500+ Freshers jobs</div>
        </div>
        <div class="row">
          <div class="col-3 q-mr-md">
            <q-card style="border-radius:15px">
              <div class="row q-pa-md">
                <div class="text-h6 q-my-md"><q-icon name="filter_alt"></q-icon>Filters</div>
              </div>
              <q-list separator >
                <q-expansion-item label="Sort By" expanded  expand-icon-toggle header-class="q-pa-sm text-bold">
                  
                  <div class="column">
                  <q-radio v-model="sort" val="Relevant" label="Relevant" />
                  <q-radio v-model="sort" val="Salary - High to low" label="Salary - High to low" />
                  <q-radio v-model="sort" val="Date posted - New to Old" label="Date posted - New to Old" />
                </div>
                </q-expansion-item>
                <q-expansion-item label="Experience" expanded  expand-icon-toggle header-class="q-pa-sm text-bold">
                  <div class="column q-pa-sm">
                    <div class="row text-grey-6 q-my-md">Your work experience
                    </div>
                    <div class="row">
                      <q-slider class="q-mx-xs q-my-md" color="green-10" v-model="experience" min="0" max="20" label-always />
                    </div>
                    
                  </div>
                  
                </q-expansion-item>
                <q-expansion-item label="Salary" expanded  expand-icon-toggle header-class="q-pa-sm text-bold">
                  <q-slider v-model="salary" min="0" max="150000" label-always />
                </q-expansion-item>
              </q-list>



              
           
            
            </q-card>
          </div>
          <div class="col-6">
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
          <div class="col-3"></div>
        </div>
      </div>

    </div>

  </q-page>
</template>

<script>
export default {
  data() {
    return {
      sort: 'Relevant',
      experience: 5,
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
  padding-top: 5px;
  height: 25px;
  width: 120px;
  border-radius: 30px;
  text-align: center;
  font-size: 13px;

}

.q-pa-md {
  padding-top: 3px;
  padding: 1rem;
}

.q-mb-md {
  margin-bottom: 1rem;
}
</style>
