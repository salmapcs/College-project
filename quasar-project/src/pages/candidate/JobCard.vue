<template>
    <q-card class="q-mb-md full-width">
      <div class="col q-pa-sm" style="color:#8c8594;">
        <div>
          <div class="flex justify-between">
            <div class="row">
              <div class="q-pr-sm">
                <img src="/public/icons/download.png" alt="Company Logo" class="logo">
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
            <div class="req bg-grey-4 full-width">
              <i class="fa-regular fa-comment-dots"></i>{{ language }}
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </template>
  
  <script>
  export default {
    props: ['title', 'company', 'location', 'salary', 'type', 'experience', 'language']
  }
  </script>
  
  <style scoped>
  .req {
    padding-top: 3px;
    height: 25px;
    width: 90px;
    border-radius: 10px;
    text-align: center;
    font-size: 12px;
  }
  
  .logo {
    width: 32px;
    height: 32px;
  }
  
  .full-width {
    width: 100%;
  }
  
  .q-mb-md {
    margin-bottom: 1rem;
  }
  </style>
  