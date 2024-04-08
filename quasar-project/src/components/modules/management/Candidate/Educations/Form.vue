<template>
    <q-form ref="form" class="q-gutter-md">
      <div class="text-h5">
        Add Education
      </div>
      <q-input outlined label="Institution" v-model="formData.institution" :rules="[val => !!val || 'Mandatory Field']"></q-input>
  
      <q-select outlined label="Degree" v-model="formData.degree" :options="degreeOptions"></q-select>
  
      <q-input outlined label="Grade Point Average" v-model="formData.grade_point_average"></q-input>
  
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
          institution: '',
          degree: '',
          grade_point_average: ''
        },
        formSubmitting: false,
        degreeOptions: ['Bachelor', 'Master', 'PhD']
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
          let httpClient = await this.$api.post('items/educations', this.formData);
          this.formSubmitting = false;
          this.formData = {};
          this.$q.dialog({
            message: 'Education Added Successfully'
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
  