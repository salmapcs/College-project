<template>
    <q-form ref="form" class="q-gutter-md" :class="{ 'bg-amber-1': mode === 'edit' }">
      <div class="text-h5">
        Post a Job
      </div>
      <q-input ref="job_posting_title_input" outlined label="Title Name" v-model="formData.job_posting_title"
        :rules="[val => !!val || 'Mandatory Field']" :disable="mode === 'edit'"></q-input>
  
      <q-input outlined type="textarea" label="Description" v-model="formData.job_description"></q-input>
  
      <q-select outlined label="Experience Level" v-model="formData.experience_level" :options="experience_level.options"
        emit-value option-label="text" option-value="value" :loading="experience_level.loading" :error-message="experience_level.error"
        :error="!!experience_level.error"></q-select>
  
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
    data() {
      return {
        formData: {},
        formSubmitting: false,
        experience_level: {
          loading: false,
          error: false,
          options: [],
          loadingAttempt: 0
        }
      }
    },
    methods: {
        async fetchCategoryOptions() {
  this.experience_level.loading = true;
  try {
    this.experience_level.loadingAttempt++;
    let httpClient = await this.$api.get('fields/job_posting/experience_level');
    this.experience_level.loadingAttempt = 0;
    this.experience_level.error = false;
    // Mapping response data to options array
    this.experience_level.options = httpClient?.data?.options.map(option => ({
      text: option.text,
      value: option.value
    })) || [];
  } catch (err) {
    if (this.experience_level.loadingAttempt <= 5) {
      setTimeout(this.fetchCategoryOptions, 1000);
    } else {
      this.experience_level.error = 'Failed to load options';
    }
  } finally {
    this.experience_level.loading = false;
  }
},

      async submitForm() {
        let valid = await this.$refs.form.validate();
        if (!valid) {
          return;
        }
        this.formSubmitting = true;
        try {
          let httpClient = await this.$api.post('items/job_posting', this.formData);
          this.formSubmitting = false;
          this.formData = {};
          this.$mitt.emit('module-data-changed:job_posting');
          this.$q.dialog({
            message: 'Data Submitted Successfully'
          });
          this.$refs.job_posting_title_input.$el.focus();
        } catch (err) {
          this.formSubmitting = false;
          this.$q.dialog({
            message: 'Form Submission failed'
          });
        }
      },
      async updateForm() {
        let valid = await this.$refs.form.validate();
        if (!valid) {
          return;
        }
        this.formSubmitting = true;
        try {
          let httpClient = await this.$api.patch('items/job_posting/' + this.formData.id, this.formData);
          this.formSubmitting = false;
          this.formData = {};
          this.$mitt.emit('module-data-changed:job_posting');
          this.$q.dialog({
            message: 'Data Updated Successfully'
          });
          this.$refs.job_posting_title_input.$el.focus();
        } catch (err) {
          this.formSubmitting = false;
          this.$q.dialog({
            message: 'Data Updation failed'
          });
        }
      },
      async fetchData() {
        let httpClient = await this.$api.get('items/job_posting/' + this.id);
        this.formData = httpClient.data.data;
      }
    },
    created() {
      this.fetchCategoryOptions();
      if (this.mode === 'edit') {
        this.fetchData();
      }
    }
  }
  </script>
  