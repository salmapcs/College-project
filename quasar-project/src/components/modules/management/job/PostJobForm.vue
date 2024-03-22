<template>
    <q-form ref="form" class="q-gutter-md">
      <div class="text-h5">
        Post a Job
      </div>
      <q-input outlined label="Job Title" v-model="formData.job_posting_title"></q-input>
      <q-input outlined type="textarea" label="Job Description" v-model="formData.job_description"></q-input>
      <q-select outlined label="Experience Level" v-model="formData.experience_level" :options="experienceLevelOptions"></q-select>
      <q-select outlined label="Job Location" v-model="formData.job_location" :options="jobLocationOptions"></q-select>
      <q-input outlined label="Responsibilities" v-model="formData.responsibilities"></q-input>
      <q-select outlined label="Qualification" v-model="formData.qualification" :options="qualificationOptions"></q-select>
      <div class="row q-gutter-sm">
        <q-btn label="Submit" color="primary" unelevated @click="submitForm" :loading="formSubmitting"></q-btn>
        <q-btn label="Cancel" color="red" unelevated @click="$router.go(-1)"></q-btn>
      </div>
    </q-form>
  </template>
  
  <script>
  export default {
    data () {
      return {
        formData: {
          job_posting_title: '',
          job_description: '',
          experience_level: '',
          job_location: '',
          responsibilities: '',
          qualification: ''
        },
        formSubmitting: false,
        experienceLevelOptions: ['Entry Level', 'Intermediate', 'Senior'],
        jobLocationOptions: ['Location 1', 'Location 2', 'Location 3'], 
        qualificationOptions: ['Bachelor', 'Master', 'PhD'] 
      }
    },
    methods: {
      async submitForm () {
     
        this.formSubmitting = true
        try {
          let httpClient = await this.$api.post('items/job_postings', this.formData)
    
          this.$q.dialog({
            message: 'Job Posted Successfully'
          })
          this.$router.go(-1)
        } catch (err) {
       
          this.$q.dialog({
            message: 'Failed to post job'
          })
        } finally {
          this.formSubmitting = false
        }
      }
    }
  }
  </script>
  