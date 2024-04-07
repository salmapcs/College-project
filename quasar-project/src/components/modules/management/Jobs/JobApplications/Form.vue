<template>
    <q-form ref="form" class="q-gutter-md">
      <div class="text-h5">
        Apply for a Job
      </div>
      <q-input outlined label="Applicant Name" v-model="formData.applicant_name" :rules="[val => !!val || 'Mandatory Field']"></q-input>
  
      <q-input outlined label="Applicant Email" v-model="formData.applicant_email"></q-input>
  
      <q-input outlined type="textarea" label="Job Description" v-model="formData.job_description"></q-input>
  
      <q-select outlined label="Status" v-model="formData.status" :options="statusOptions"></q-select>
  
      <div class="row q-gutter-sm">
        <q-btn label="Submit" color="primary" unelevated @click="submitForm" :loading="formSubmitting"></q-btn>
  
        <q-btn label="Cancel" color="red" unelevated @click="$router.go(-1)"></q-btn>
      </div>
    </q-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          applicant_name: '',
          applicant_email: '',
          job_description: '',
          status: ''
        },
        formSubmitting: false,
        statusOptions: ['Submitted', 'Under Review', 'Rejected', 'Hired']
      };
    },
    methods: {
      async submitForm() {
        let valid = await this.$refs.form.validate();
        if (!valid) {
          return;
        }
        this.formSubmitting = true;
        try {
          let httpClient = await this.$api.post('items/job_applications', this.formData);
          this.formSubmitting = false;
          this.formData = {};
          this.$q.dialog({
            message: 'Application Submitted Successfully'
          });
          this.$router.go(-1);
        } catch (err) {
          this.formSubmitting = false;
          this.$q.dialog({
            message: 'Form Submission Failed'
          });
        }
      }
    }
  };
  </script>
  