<template>
    <q-form class="flex justify-center ">
      <q-card class="q-pa-lg">
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right: 20px;">
            <label for="firstName">First Name</label>
            <q-input outlined v-model="firstName" placeholder="e.g. Aman"/>
          </div>
          <div class="col" style="margin-right: 20px;">
            <label for="middleName">Middle Name</label>
            <q-input outlined v-model="middleName" placeholder="e.g. Roy"/>
          </div>
          <div class="col">
            <label for="lastName">Last Name</label>
            <q-input outlined v-model="lastName" placeholder="e.g. Singh"/>
          </div>
        </div>
  
        <div class="row col q-pa-sm">
          <div class="column col" style="margin-right: 20px;">
            <label for="email">Email</label>
            <q-input outlined v-model="email" placeholder="e.g. amansroy234@gmail.com"/>
          </div>
        </div>
  
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right: 20px;">
            <label for="contact">Contact No.</label>
            <q-input outlined v-model="contact" placeholder="e.g. +91-xxxxxxxxxx"/>
          </div>
          <div class="col" style="margin-right: 20px;">
            <label for="dob">Date of Birth</label>
            <q-input color="grey-3" outlined v-model="dob" label="Choose date">
              <template v-slot:append>
                <q-icon name="event" color="grey"/>
              </template>
            </q-input>
          </div>
        </div>
  
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right: 20px;">
            <label for="city">City</label>
            <q-input outlined v-model="city" required/>
          </div>
          <div class="col" style="margin-right: 20px;">
            <label for="state">State</label>
            <q-input outlined v-model="state" required/>
          </div>
          <div class="col">
            <label for="pincode">Pincode</label>
            <q-input outlined v-model="pincode" required/>
          </div>
        </div>
  
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right: 20px;">
            <label for="gender">Gender</label>
            <q-radio-group v-model="gender">
              <q-radio dense val="Male" label="Male"/>
              <q-radio dense val="Female" label="Female"/>
            </q-radio-group>
          </div>
        </div>
  
        <div class="row col q-pa-sm">
          <div class="column col" style="margin-right: 20px;">
            <label for="address">Address</label>
            <q-input outlined v-model="address"/>
          </div>
        </div>
  
        <div class="row col q-pa-sm">
          <q-btn class="full-width" color="primary" text-color="white" label="Next" @click="$router.replace('/candidate/basic/education')"/>
        </div>
      </q-card>
    </q-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        contact: '',
        dob: '',
        city: '',
        state: '',
        pincode: '',
        gender: '',
        address: ''
      };
    }
  };
  </script>
  
  <style scoped>
  .full-width {
    width: 100%;
  }
 
  </style>
  