<template>
  <q-form ref="form" class="q-gutter-md" :class="{ 'bg-amber-1': mode === 'edit' }">
    <div class="text-h5">
      Add Education 
    </div>
    <q-select outlined label="Degree" v-model="formData.degree" :options="degree.options" map-options
      option-label="text" emit-value option-value="value" :loading="degree.loading" :error-message="degree.error"
      :error="!!degree.error"></q-select>

    <q-input outlined label="Specification" v-model="formData.specification"></q-input>

    <q-input outlined type="number" step="1" label="Grade Point Average" v-model="formData.grade_point_average"></q-input>

    <q-input outlined type="textarea" label="Description" v-model="formData.education_description"></q-input>

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
      degree: {
        loading: false,
        error: false,
        options: [],
        loadingAttempt: 0
      }
    }
  },
  methods: {
    async fetchDegreeOptions () {
      this.degree.loading = true;
      try {
        let httpClient = await this.$api.get('fields/educations/degree');
        this.degree.loadingAttempt = 0;
        this.degree.error = false;
        this.degree.options = httpClient?.data?.data?.meta?.options?.choices;
      } catch (err) {
        if (this.degree.loadingAttempt <= 5) {
          setTimeout(this.fetchDegreeOptions, 1000);
        } else {
          this.degree.error = 'Failed to load options';
        }
      } finally {
        this.degree.loading = false;
      }
    },
    
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
        this.$emit('education-added')
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
        let httpClient = await this.$api.patch('items/educations/' + this.formData.id, this.formData)
        this.formSubmitting = false
        this.formData = {}
        this.$emit('education-updated')
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
      let httpClient = await this.$api.get('items/educations/' + this.id)
      this.formData = httpClient.data.data
    }
  },
  created () {
    this.fetchDegreeOptions();
    if (this.mode === 'edit') {
      this.fetchData()
    }
  }
}
</script>
