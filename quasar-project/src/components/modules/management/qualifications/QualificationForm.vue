<template>
    <q-form ref="form" class="q-gutter-md" :class="{ 'bg-amber-1': mode === 'edit' }">
      <div class="text-h5">
        {{ mode === 'add' ? 'Add Qualification' : 'Edit Qualification' }}
      </div>
      <q-input outlined label="Qualification Name" v-model="formData.qualification_name"></q-input>
  
      <q-select outlined label="Degree" v-model="formData.degree" :options="degreeOptions" :disable="mode === 'edit'"></q-select>
  
      <q-select outlined label="Specialisation" v-model="formData.specialisation" :options="specialisationOptions" :disable="mode === 'edit'"></q-select>
  
      <div ref="div" class="row q-gutter-sm">
        <q-btn label="Submit" color="primary" unelevated @click="submitForm" :loading="formSubmitting"
          :disable="formSubmitting" v-if="mode === 'add'"></q-btn>
  
        <q-btn label="Update" color="amber" unelevated @click="updateForm" :loading="formSubmitting"
          :disable="formSubmitting" v-if="mode === 'edit'"></q-btn>
          
       <q-btn label="Cancel" color="red" unelevated @click="$router.go(-1)"></q-btn>         
      </div>
    </q-form>
  </template>
  
  <script>
  export default {
    props: ['mode', 'id'],
    data () {
      return {
        formData: {
          qualification_name: '',
          degree: null,
          specialisation: null
        },
        formSubmitting: false,
        degreeOptions: [],
        specialisationOptions: []
      }
    },
    methods: {
      async fetchDegreeOptions() {
        try {
          let httpClient = await this.$api.get('fields/qualifications/degree')
          this.degreeOptions = httpClient.data.data.meta.options.choices
        } catch (err) {
          console.error('Failed to fetch degree options', err)
        }
      },
      async fetchSpecialisationOptions() {
        try {
          let httpClient = await this.$api.get('fields/qualifications/specialisation')
          this.specialisationOptions = httpClient.data.data.meta.options.choices
        } catch (err) {
          console.error('Failed to fetch specialisation options', err)
        }
      },
      async submitForm () {
        let valid = await this.$refs.form.validate()
        if (!valid) {
          return
        }
        this.formSubmitting = true
        try {
          let httpClient = await this.$api.post('items/qualifications', this.formData)
          this.formSubmitting = false
          this.formData = {
            qualification_name: '',
            degree: null,
            specialisation: null
          }
          this.$emit('qualification-added')
          this.$q.dialog({
            message: 'Data Submitted Successfully'
          })
        } catch (err) {
          this.formSubmitting = false
          this.$q.dialog({
            message: 'Form Submission failed'
          })
        }
      },
      async updateForm () {
        let valid = await this.$refs.form.validate()
        if (!valid) {
          return
        }
        this.formSubmitting = true
        try {
          let httpClient = await this.$api.patch('items/qualifications/' + this.formData.id, this.formData)
          this.formSubmitting = false
          this.formData = {
            qualification_name: '',
            degree: null,
            specialisation: null
          }
          this.$emit('qualification-updated')
          this.$q.dialog({
            message: 'Data Updated Successfully'
          })
        } catch (err) {
          this.formSubmitting = false
          this.$q.dialog({
            message: 'Data Updation failed'
          } ) 
        }
      },
      async fetchData () {
        let httpClient = await this.$api.get('items/qualifications/' + this.id)
        this.formData = httpClient.data.data
      }
    },
    created () {
      this.fetchDegreeOptions()
      this.fetchSpecialisationOptions()
      if (this.mode === 'edit') {
        this.fetchData()
      }
    }
  }
  </script>
  