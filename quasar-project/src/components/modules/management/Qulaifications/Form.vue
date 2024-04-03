<template>
    <q-form ref="form" class="q-gutter-md" :class="{ 'bg-amber-1': mode === 'edit' }">
      <div class="text-h5">
        {{ mode === 'edit' ? 'Edit Qualification' : 'Create Qualification' }}
      </div>
      <q-input ref="qualification_name_input" outlined label="Qualification Name" v-model="formData.qualification_name"
        :rules="[val => !!val || 'Mandatory Field']" :disable="mode === 'edit'"></q-input>
  
      <q-select outlined label="Degree" v-model="formData.degree" :options="degreeOptions" map-options
        option-label="text" emit-value option-value="value" :loading="degree.loading" :error-message="degree.error"
        :error="!!degree.error"></q-select>
  
      <q-input outlined type="textarea" label="Description" v-model="formData.description"></q-input>
  
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
        formData: {
          qualification_name: '',
          degree: '',
          description: ''
        },
        formSubmitting: false,
        degree: {
          loading: false,
          error: false,
          options: []
        }
      };
    },
    methods: {
      async fetchDegreeOptions() {
        this.degree.loading = true;
        try {
          // Fetch degree options from API
          const response = await this.$api.get('/fields/qualifications/degree');
          this.degree.options = response.data.data.meta.options.choices;
          this.degree.loading = false;
        } catch (error) {
          this.degree.error = 'Failed to load options';
          this.degree.loading = false;
        }
      },
      async submitForm() {
        let valid = await this.$refs.form.validate();
        if (!valid) return;
        
        this.formSubmitting = true;
        try {
          const response = await this.$api.post('/items/qualifications', this.formData);
          this.formSubmitting = false;
          this.$emit('form-submitted', response.data); // Emit event for parent component
          this.$router.go(-1);
        } catch (error) {
          this.formSubmitting = false;
          console.error('Form Submission failed:', error);
        }
      },
      async updateForm() {
        let valid = await this.$refs.form.validate();
        if (!valid) return;
        
        this.formSubmitting = true;
        try {
          const response = await this.$api.patch(`/items/qualifications/${this.id}`, this.formData);
          this.formSubmitting = false;
          this.$emit('form-updated', response.data); // Emit event for parent component
          this.$router.go(-1);
        } catch (error) {
          this.formSubmitting = false;
          console.error('Data Updation failed:', error);
        }
      }
    },
    created() {
      this.fetchDegreeOptions();
      if (this.mode === 'edit') {
        // Fetch qualification data if in edit mode
      }
    }
  };
  </script>
  