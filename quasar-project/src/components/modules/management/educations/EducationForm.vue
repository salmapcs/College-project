<template>
    <q-form ref="form" class="q-gutter-md">
      <div class="text-h5">
        Add Education
      </div>
      <q-select outlined label="Degree" v-model="formData.degree" :options="degreeOptions"></q-select>
      <q-input outlined label="Specification" v-model="formData.specification"></q-input>
      <q-select outlined label="Institute" v-model="formData.institute" :options="instituteOptions"></q-select>
      <q-input outlined label="Grade Point Average" v-model="formData.grade_point_average"></q-input>
      <div class="row q-gutter-sm">
        <q-btn label="Submit" color="primary" unelevated @click="submitForm" :loading="formSubmitting"></q-btn>
        <q-btn label="Cancel" color="red" unelevated @click="$router.go(-1)"></q-btn>
      </div>
    </q-form>
  </template>
  
  <script>
  export default {
    props:['mode','id'],
    data () {
      return {
        formData: {
          degree: '',
          specification: '',
          institute: '',
          grade_point_average: ''
        },
        formSubmitting: false,
        degreeOptions: ['Bachelor', 'Master', 'PhD'], 
        instituteOptions: ['pwc','jd','michael'], 
      }
    },
    methods: {
      async submitForm () {
        let valid = await this.$refs.form.validate()
      if (!valid) {
        return
      }
        this.formSubmitting = true
        try {
          let httpClient = await this.$api.post('items/educations', this.formData)
          this.formSubmitting = false
        this.formData = {}
        this.$mitt.emit('module-data-changed:educations')
          this.$q.dialog({
            message: 'Education Added Successfully'
          })
          this.$router.go(-1)
        } catch (err) {
            this.formSubmitting = false
          this.$q.dialog({
            message: 'Failed to add education'
          })
        } 
      },
      async fetchInstituteOptions () {
        this.status.loading = true
        try {
          let httpClient = await this.$api.get('fields/institute')
          this.instituteOptions = httpClient.data.data.map(institute => institute.name)
        } catch (err) {

          console.error(err)
        }
      }
    },
    created () {
      this.fetchInstituteOptions()
    }
  }
  </script>
  