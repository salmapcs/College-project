<template>
    <q-page class="q-pa-xl">
      <div class="row justify-between">
        <div class="col-3">
          <h6>500 Search results</h6>
          <job-card
            title="LIC Agent"
            company="Life Insurance Corporation"
            location="Work from home"
            salary="₹20,000 - ₹90,000 monthly*"
            type="Full Time"
            experience="Freshers only"
            language="No English Required"
          />
          <br>
          <job-card
            title="Data Analyst"
            company="Alembic Pharmaceuticals Ltd"
            location="Gorwa, Vadodara"
            salary="₹57,000 - ₹77,000 monthly*"
            type="Full Time"
            experience="Freshers only"
            language="No English Required"
          />
        </div>
        <div class="col-6"></div>
        <div class="col-3">
          <img src="/side-image.jpg" alt="Create Profile">
        </div>
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    components: {
      JobCard: {
        props: ['title', 'company', 'location', 'salary', 'type', 'experience', 'language'],
        template: `
          <q-card class="q-mb-md">
            <div class="col q-pa-sm" style="width: 512px;height: 180px;color:#8c8594;">
              <div>
                <div class="flex justify-between">
                  <div class="row">
                    <div class="q-pr-sm" style="width: 32px;height: 32px;">
                      <img src="/public/icons/download.png" alt="Company Logo">
                    </div>
                    <div class="column">
                      <div class="title text-bold" style="font-size: 20px;color: black;">{{ title }}</div>
                      <div class="title">{{ company }}</div>
                    </div>
                  </div>
                </div><br>
                <div style="font-size: 15px;"><i class="fa-solid fa-house"></i> {{ location }}</div>
                <div style="font-size: 15px;"><i class="fa-solid fa-money-bill-1-wave"></i> {{ salary }}</div><br>
                <div class="row" style="font-size: 15px;">
                  <div class="req bg-grey-4 q-mr-sm"><i class="fa-brands fa-facebook"></i>{{ type }}</div>
                  <div class="req bg-grey-4 q-mr-sm"><i class="fa-solid fa-briefcase"></i>{{ experience }}</div>
                  <div class="req bg-grey-4" style="width: 150px;">
                    <i class="fa-regular fa-comment-dots"></i>{{ language }}
                  </div>
                </div>
              </div>
            </div><br>
          </q-card>
        `
      }
    }
  }
  </script>
  
  <style>
  .req {
    padding-top: 3px;
    height: 25px;
    width: 90px;
    border-radius: 10px;
    text-align: center;
    font-size: 12px;
  }
  
  .q-mb-md {
    margin-bottom: 1rem;
  }
  </style>
  