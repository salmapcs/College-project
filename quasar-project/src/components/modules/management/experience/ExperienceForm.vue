<template>
    <q-form ref="form" class="q-gutter-md">
      <div class="text-h5">
        Add Experience
      </div>
      <q-input outlined label="Company Name" v-model="formData.company_name"></q-input>
      <q-input outlined label="Job Title" v-model="formData.job_title"></q-input>
      <q-input outlined label="Department" v-model="formData.department"></q-input>
      <q-input outlined label="Role" v-model="formData.role"></q-input>
      <q-input outlined label="Responsibilities" v-model="formData.responsibilities"></q-input>
      <q-input outlined label="Achievements" v-model="formData.acheivements"></q-input>
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
          company_name: '',
          job_title: '',
          department: '',
          role: '',
          responsibilities: '',
          acheivements: '',
        },
        formSubmitting: false
      }
    },
    methods: {
      async submitForm () {

        this.formSubmitting = true
        try {
          let httpClient = await this.$api.post('items/experiences', this.formData)
          this.$q.dialog({
            message: 'Experience Added Successfully'
          })
          this.$router.go(-1)
        } catch (err) {
        
          this.$q.dialog({
            message: 'Failed to add experience'
          })
        } finally {
          this.formSubmitting = false
        }
      }
    }
  }
  </script>
  