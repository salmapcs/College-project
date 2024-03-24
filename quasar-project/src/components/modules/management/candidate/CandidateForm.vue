<template>
    <q-form ref="form" class="q-gutter-md">
      <div class="text-h5">
        Add Candidate
      </div>
      <q-input outlined label="First Name" v-model="formData.first_name" :rules="[val => !!val || 'Mandatory Field']" :disable="mode === 'edit'"></q-input>
      <q-input outlined label="Middle Name" v-model="formData.middle_name" :rules="[val => !!val || 'Mandatory Field']" :disable="mode === 'edit'"></q-input>
      <q-input outlined label="Last Name" v-model="formData.last_name" :rules="[val => !!val || 'Mandatory Field']" :disable="mode === 'edit'"></q-input>
  
      <q-input outlined label="Email Address" v-model="formData.email_address"></q-input>
  
      <q-input outlined label="Contact Number" v-model="formData.contact_number" :options="contactNumberOptions" ></q-input>
  
      <q-select outlined label="Gender" v-model="formData.gender" :options="genderOptions" map-options
      option-label="text" emit-value option-value="value" :loading="gender.loading" :error-message="gender.error"
      :error="!!gender.error"></q-select>
  
      <div class="row q-gutter-sm">
        <q-btn label="Submit" color="primary" unelevated @click="submitForm" :loading="formSubmitting" :disable="formSubmitting || mode === 'edit'"></q-btn>
  
        <q-btn label="Update" color="amber" unelevated @click="updateForm" :loading="formSubmitting"
          :disable="formSubmitting" v-if="mode === 'edit'"></q-btn>
  
        <q-btn label="Cancel" color="red" unelevated @click="$router.go(-1)"></q-btn>
      </div>
    </q-form>
  </template>
  
  <script>
  export default {
    props:['mode','id'],
    data () {
      return {
        formData: {},
        formSubmitting: false,
        status: {
          loading: false,
          error: false,
          options: [],
          loadingAttempt: 0
        },
        gender: {
          loading: false,
          error: false,
          options: [],
          loadingAttempt: 0
        }
      }
    },
    methods: {
      async fetchGenderOptions () {
        this.gender.loading = true
        try {
            this.status.loadingAttempt++
          let httpClient = await this.$api.get('fields/candidates/gender')
          this.gender.loadingAttempt = 0;
          this.gender.error = false;
          this.gender.options = httpClient?.data?.data?.meta?.options?.choices;
        } catch (err) {
          if (this.gender.loadingAttempt <= 5) {
            setTimeout(this.fetchGenderOptions, 1000);
          } else {
            this.gender.error = 'Failed to load options';
          }
        }
        if (!!!this.gender.error || (!!this.gender.error && this.gender.loadingAttempt > 5)) {
          this.gender.loading = false
        }
      },
      async submitForm () {
        let valid = await this.$refs.form.validate();
        if (!valid) {
          return;
        }
        this.formSubmitting = true;
        try {
          let httpClient = await this.$api.post('items/candidates', this.formData)
          this.formSubmitting = false
          this.formData = {}
          this.$mitt.emit('module-data-changed:candidates')
          this.$q.dialog({
            message: 'Candidate Added Successfully'
          });
          this.$refs.first_name_input.$el.focus();
        } catch (err) {
          this.formSubmitting = false
          this.$q.dialog({
            message: 'Form Submission failed'
          });
        }
      },
      async updateForm () {
        let valid = await this.$refs.form.validate();
        if (!valid) {
          return
        }
        this.formSubmitting = true;
        try {
          let httpClient = await this.$api.patch('items/candidates/' + this.formData.id, this.formData);
          this.formSubmitting = false;
          this.formData = {};
          this.$mitt.emit('module-data-changed:candidates');
          this.$q.dialog({
            message: 'Data Updated Successfully'
          });
          this.$refs.first_name_input.$el.focus();
        } catch (err) {
          this.formSubmitting = false;
          this.$q.dialog({
            message: 'Data Updation failed'
          });
        }
      },
      async fetchData () {
        let httpClient = await this.$api.get('items/candidates/' + this.id);
        this.formData = httpClient.data.data;
      }
    },
    created  () {
    this.fetchGenderOptions();
    if (this.mode === 'edit') {
      this.fetchData();
    }
  }
};
</script>

  