<template>
  <q-page class="q-pa-lg bg-grey-2" padding>
    <div class="row justify-center">
<div class="col-12 col-md-9 text-grey-8">
        <div class="row">
          <div class="text-h5 text-bold q-my-md">500+ Freshers jobs</div>
        </div> 

        <div class="row">
          <div class="col-3 q-mr-md">
            <q-card style="border-radius:14px">
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
                  <div class="column q-pa-sm">
                    <div class="row text-grey-6 q-my-md">Minimum monthly salary
                    </div>
                    <div class="row">
                  <q-slider  class="q-mx-xs q-my-md" color="green-10"  v-model="salary" min="0" max="15000" label-always />
                  <div>

                  </div>
                </div>
                  </div>
                </q-expansion-item>
              </q-list>

            </q-card>
          </div>
          <div class="col-6">
            <div v-for="job in job" :key="job.id" class="my-card-container"></div>
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
                <div class="text-title text-grey">{{ job.location }}</div>
              </div>
            </div>
            <div class="row">
              <div class="col-auto">
                <q-icon name="attach_money" class="text-grey" />
              </div>
              <div class="col">
                <div class="text-title text-grey">{{ job.salary }}</div>
              </div>
            </div>
          </q-card-section>
  
          <q-card-section>
            <div class="row q-gutter-sm ">
              <q-chip v-for="tag in job.tags" :key="tag.text" :icon="tag.icon" class=" custom-chip-border-radius"  >{{ tag.text }}</q-chip>
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
      job: [
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

<style scoped>
.my-card {
    width: 100%;
    max-width: 700px;
    margin: auto;
    margin-bottom: 20px;
  }
  .custom-chip-border-radius {
  border-radius: 3px !important;
  background-color: #F2F2F3;
}
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
