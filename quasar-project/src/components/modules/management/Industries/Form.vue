<template>
    <q-form ref="form" class="q-gutter-md" :class="{ 'bg-amber-1': mode === 'edit' }">
      <div class="text-h5">
        {{ mode === 'edit' ? 'Edit Industry' : 'Create Industry' }}
      </div>
      <q-input ref="industry_name_input" outlined label="Industry Name" v-model="formData.industry_name"
        :rules="[val => !!val || 'Mandatory Field']" :disable="mode === 'edit'"></q-input>
  
      <q-input outlined type="textarea" label="Description" v-model="formData.description"></q-input>
  
      <q-select outlined label="Status" v-model="formData.status" :options="statusOptions" map-options
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
    data() {
      return {
        formData: {
          industry_name: '',
          description: '',
          status: ''
        },
        formSubmitting: false,
        status: {
          loading: false,
          error: false
        },
        statusOptions: []
      };
    },
    methods: {
      async fetchStatusOptions() {
        this.status.loading = true;
        try {
          const response = await this.$api.get('/fields/industries/status');
          this.statusOptions = response.data.data.meta.options.choices;
          this.status.loading = false;
        } catch (error) {
          this.status.error = 'Failed to load options';
          this.status.loading = false;
        }
      },
      async submitForm() {
        let valid = await this.$refs.form.validate();
        if (!valid) return;
        
        this.formSubmitting = true;
        try {
          const response = await this.$api.post('/items/industries', this.formData);
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
          const response = await this.$api.patch(`/items/industries/${this.id}`, this.formData);
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
      this.fetchStatusOptions();
      if (this.mode === 'edit') {
        // Fetch industry data if in edit mode
      }
    }
  };
  </script>
  