<template>
    <q-page padding>
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="row items-start">
            <div class="col-auto">
              <q-img src="/public/icons/download.png" style="width: 50px; height: 50px;" />
            </div>
            <div class="col">
              <div class="text-h6">Junior Consultant</div>
              <div class="text-caption text-grey">Motherhood India</div>
            </div>
            <div class="col-auto">
              <q-icon name="chevron_right" />
            </div>
          </div>
        </q-card-section>
        
        <q-separator />
  
        <q-card-section>
          <div class="row">
            <div class="col-auto">
              <q-icon name="place" class="text-grey" />
            </div>
            <div class="col">
              <div class="text-subtitle2">Kalyan Nagar, Bengaluru/Bangalore</div>
            </div>
          </div>
          <div class="row">
            <div class="col-auto">
              <q-icon name="attach_money" class="text-grey" />
            </div>
            <div class="col">
              <div class="text-subtitle2">₹120,000 - ₹149,999 monthly</div>
            </div>
          </div>
        </q-card-section>
        
        <q-separator />
  
        <q-card-section>
          <div class="row q-gutter-sm">
            <q-chip outline dense icon="work">Full Time</q-chip>
            <q-chip outline dense icon="person">Freshers only</q-chip>
            <q-chip outline dense icon="language">Good (Intermediate / Advanced) English</q-chip>
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'JobCard'
  }
  </script>
  
  <style>
  .my-card {
    width: 100%;
    max-width: 600px;
    margin: auto;
  }
  </style>
  