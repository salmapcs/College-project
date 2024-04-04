<template>
    <q-form ref="form" class="q-gutter-md" :class="{ 'bg-amber-1': mode === 'edit' }">
      <div class="text-h5">
        Add category
      </div>
      <q-input ref="category_name_input" outlined label="Category Name" v-model="formData.category_name"
        :rules="[val => !!val || 'Mandatory Field']" :disable="mode === 'edit'"></q-input>
  
      <q-input outlined type="textarea" label="Description" v-model="formData.description"></q-input>
  
      <q-select outlined label="Status" v-model="formData.status" :options="status.options" map-options
        option-label="text" emit-value option-value="value" :loading="status.loading" :error-message="status.error"
        :error="!!status.error"></q-select>
  
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
        formData: {},
        formSubmitting: false,
        formError: false,
        status: {
          loading: false,
          error: false,
          options: [],
          loadingAttempt: 0
        }
  
      }
    },
    methods: {
      async fetchCategoryOptions () {
        this.status.loading = true
        try {
          this.status.loadingAttempt++
          let httpClient = await this.$api.get('fields/job_categories/status')
          this.status.loadingAttempt = 0
          this.status.error = false
          this.status.options = httpClient?.data?.data?.meta?.options?.choices
        } catch (err) {
          if (this.status.loadingAttempt <= 5) {
            // this.status.error = 'Please wait loading options'
            setTimeout(this.fetchCategoryOptions, 1000)
  
          } else {
            this.status.error = 'Failed to load options'
  
          }
  
        }
        if (!!!this.status.error || (!!this.status.error && this.status.loadingAttempt > 5)) {
          this.status.loading = false
        }
  
  
      },
      async submitForm () {
        let valid = await this.$refs.form.validate()
        if (!valid) {
          return
        }
        this.formSubmitting = true
        try {
          let httpClient = await this.$api.post('items/job_categories', this.formData)
          this.formSubmitting = false
          this.formData = {}
          this.$mitt.emit('module-data-changed:job_categories')
          this.$q.dialog({
            message: 'Data Submitted Successfully'
          })
          this.$refs.category_name_input.$el.focus()
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
          let httpClient = await this.$api.patch('items/job_categories/' + this.formData.id, this.formData)
          this.formSubmitting = false
          this.formData = {}
          this.$mitt.emit('module-data-changed:job_categories')
          this.$q.dialog({
            message: 'Data Updated Successfully'
          })
          this.$refs.skill_name_input.$el.focus()
        } catch (err) {
          this.formSubmitting = false
          this.$q.dialog({
            message: 'Data Updation failed'
          } ) 
        }
      },
      async fetchData () {
        let httpClient = await this.$api.get('items/job_categories/' + this.id)
        this.formData = httpClient.data.data
      }
    },
    created () {
      this.fetchCategoryOptions()
      if (this.mode === 'edit') {
        this.fetchData()
      }
    }
  }
  </script>
  