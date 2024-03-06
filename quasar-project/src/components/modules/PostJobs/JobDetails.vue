<template>
    <q-form style="width: 600px; height: 100%;">
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right:20px;">
            <label for="company-hiring">Company You're Hiring For <span style="color: red">*</span></label>
            <q-input outlined v-model="companyHiring" placeholder="Enter company name" />
          </div>
        </div>
  
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right:20px;">
            <label for="job-title">Job Title/Designation <span style="color: red">*</span></label>
            <q-input outlined v-model="jobTitle" placeholder="Enter job title" />
          </div>
        </div>
        
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right:20px;">
            <label for="job-type">Types of Job <span style="color: red">*</span></label>
            <q-select
              outlined
              v-model="jobType"
              :options="jobTypeOptions"
              placeholder="Select job type"
            />
          </div>
        </div>
  
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right:20px;">
            <label for="job-location">Location <span style="color: red">*</span></label>
            <q-input outlined v-model="jobLocation" placeholder="Enter job location" />
          </div>
        </div>
  
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right:20px;">
            <label for="work-location-type">Work Location Type <span style="color: red">*</span></label>
            <q-select
              outlined
              v-model="workLocationType"
              :options="workLocationTypeOptions"
              placeholder="Select work location type"
            />
          </div>
        </div>
  
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right:20px;">
            <label for="compensation">Compensation <span style="color: red">*</span></label>
            <q-input outlined v-model="compensation" placeholder="Enter compensation" />
          </div>
        </div>
  
        <div class="row col q-pa-sm flex-center">
          <div class="row">
            <q-btn color="green-10" text-color="white" label="Continue" style="margin-right:20px;"  @click="$router.replace('./requirements')" />
          </div>
        </div>
      </q-form>
</template>
<script>
  export default {
    data() {
      return {
        companyHiring: '',
        jobTitle: '',
        jobType: '',
        jobTypeOptions: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'],
        jobLocation: '',
        workLocationType: '',
        workLocationTypeOptions: ['On-site', 'Remote', 'Hybrid'],
        compensation: '',
        methods:  {
            continue() {
        console.log("continue clicked");}}
           
        }
      }
    }
  </script>
  