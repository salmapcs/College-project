<template>
    <q-form ref="form" class="q-gutter-md">
      <div class="text-h5">
        Add Experience
      </div>
      <q-input outlined label="Company Name" v-model="formData.company_name" :rules="[val => !!val || 'Mandatory Field']"></q-input>
  
      <q-input outlined label="Department" v-model="formData.department"></q-input>
  
      <q-input outlined label="Role" v-model="formData.role"></q-input>
  
      <q-input outlined type="textarea" label="Responsibilities" v-model="formData.responsibilities"></q-input>
  
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
          company_name: '',
          department: '',
          role: '',
          responsibilities: ''
        },
        formSubmitting: false
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
          let httpClient = await this.$api.post('items/experiences', this.formData);
          this.formSubmitting = false;
          this.formData = {};
          this.$q.dialog({
            message: 'Experience Added Successfully'
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
  