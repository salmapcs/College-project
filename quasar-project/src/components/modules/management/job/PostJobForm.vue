<template>
  <q-form ref="form" class="q-gutter-md">
    <div class="text-h5">
      Add Job Posting
    </div>

    <q-input outlined label="Job Title" v-model="formData.job_posting_title"></q-input>

    <q-input outlined type="textarea" label="Job Description" v-model="formData.job_description"></q-input>

    <q-input outlined type="textarea" label="Responsibilities" v-model="formData.responsibilities"></q-input>

    <q-select outlined label="Job Location" v-model="formData.job_location" :options="locationOptions" map-options
      option-label="text" emit-value option-value="value" :loading="location.loading" :error-message="location.error"
      :error="!!location.error"></q-select>

    <q-select outlined label="Experience Level" v-model="formData.experience_level" :options="experienceOptions" map-options
      option-label="text" emit-value option-value="value" :loading="experience.loading" :error-message="experience.error"
      :error="!!experience.error"></q-select>

    <q-select outlined label="Qualifications" v-model="formData.qualifications" :options="qualificationOptions" map-options
      option-label="text" emit-value option-value="value" :loading="qualification.loading"
      :error-message="qualification.error" :error="!!qualification.error"></q-select>

    <div ref="div" class="row q-gutter-sm">
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
        responsibilities: '',
        job_location: '',
        experience_level: '',
        qualifications: ''
      },
      formSubmitting: false,
      location: {
        loading: false,
        error: false,
        options: []
      },
      experience: {
        loading: false,
        error: false,
        options: []
      },
      qualification: {
        loading: false,
        error: false,
        options: []
      }
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
        // Make API call to submit the form data (Directus API call)
        // Example: let httpClient = await this.$api.post('items/job_posting', this.formData)
        // Handle success/failure accordingly
        this.formSubmitting = false
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
    async fetchLocationOptions () {
      this.location.loading = true
      try {
        let httpClient = await this.$api.get('collections/job_posting/fields/job_location')
        this.location.options = httpClient.data.data.meta.options.choices.map(option => ({
          value: option,
          text: option
        }))
        this.location.error = false
      } catch (err) {
        this.location.error = 'Failed to load options'
        console.error(err)
      } finally {
        this.location.loading = false
      }
    },
    async fetchExperienceOptions () {
      this.experience.loading = true
      try {
        let httpClient = await this.$api.get('collections/job_posting/fields/experience_level')
        this.experience.options = httpClient.data.data.meta.options.choices.map(option => ({
          value: option,
          text: option
        }))
        this.experience.error = false
      } catch (err) {
        this.experience.error = 'Failed to load options'
        console.error(err)
      } finally {
        this.experience.loading = false
      }
    },
    async fetchQualificationOptions () {
      this.qualification.loading = true
      try {
        let httpClient = await this.$api.get('collections/job_posting/fields/qualifications')
        this.qualification.options = httpClient.data.data.meta.options.choices.map(option => ({
          value: option,
          text: option
        }))
        this.qualification.error = false
      } catch (err) {
        this.qualification.error = 'Failed to load options'
        console.error(err)
      } finally {
        this.qualification.loading = false
      }
    }
  },
  created () {
    this.fetchLocationOptions()
    this.fetchExperienceOptions()
    this.fetchQualificationOptions()
  }
}
</script>
