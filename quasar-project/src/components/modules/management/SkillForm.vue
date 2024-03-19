<template>
  <q-form ref="form" class="q-gutter-md">
    <div class="text-h5">
      Create Skills
    </div>
    <q-input ref="skill_name_input" outlined label="Skill Name" v-model="formData.skills_name"
      :rules="[val => !!val || 'Mandatory Field']"></q-input>
    <q-input outlined type="textarea" label="Description" v-model="formData.skills_description"
      :rules="[val => !!val || 'Mandatory Field']"></q-input>
    <q-select outlined label="Status" v-model="formData.status" :options="status.options" map-options
      option-label="text" emit-value option-value="value" :loading="status.loading" :error-message="status.error"
      :error="!!status.error"></q-select>
    <div ref="div" class="row">
      <q-btn label="Submit" color="primary" unelevated @click="submitForm" :loading="formSubmitting"
        :disable="formSubmitting"></q-btn>
    </div>
  </q-form>
</template>
<script>
export default {
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
    async fetchSkillOptions () {
      this.status.loading = true
      try {
        this.status.loadingAttempt++
        let httpClient = await this.$api.get('fields/skills/status')
        this.status.loadingAttempt = 0
        this.status.error = false
        this.status.options = httpClient?.data?.data?.meta?.options?.choices
      } catch (err) {
        if (this.status.loadingAttempt <= 5) {
          // this.status.error = 'Please wait loading options'
          setTimeout(this.fetchSkillOptions, 1000)

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
        let httpClient = await this.$api.post('items/skills', this.formData)
        this.formSubmitting = false
        this.formData = {}
        this.$q.dialog({
          message: 'Data Submitted Successfully'
        })
        this.$refs.skill_name_input.$el.focus()
      } catch (err) {
        this.formSubmitting = false
        this.$q.dialog({
          message: 'Form Submission failed'
        })
      }



    }
  },
  created () {
    this.fetchSkillOptions()
  }
}
</script>
