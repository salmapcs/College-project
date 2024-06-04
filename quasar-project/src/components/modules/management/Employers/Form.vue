<template>
    <q-form ref="form" class="q-gutter-md">
      <div class="text-h5">
        Add Employers
      </div>
      <q-input outlined label="Full Name" v-model="formData.name" :rules="[val => !!val || 'Mandatory Field']" :disable="mode === 'edit'"></q-input>
  
      <q-input outlined label="Email Address" v-model="formData.email"></q-input>
  
      <q-input outlined label="Contact Number" v-model="formData.contact_number" :options="contactNumberOptions" ></q-input>
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
      }
    },
    methods: {
      async submitForm () {
        let valid = await this.$refs.form.validate();
        if (!valid) {
          return;
        }
        this.formSubmitting = true;
        try {
          let httpClient = await this.$api.post('items/employers', this.formData)
          this.formSubmitting = false
          this.formData = {}
          this.$mitt.emit('module-data-changed:employers')
          this.$q.dialog({
            message: 'Candidate Added Successfully'
          });
          this.$refs.full_name_input.$el.focus();
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
          let httpClient = await this.$api.patch('items/employers/' + this.formData.id, this.formData);
          this.formSubmitting = false;
          this.formData = {}
          this.$mitt.emit('module-data-changed:employers')
          this.$q.dialog({
            message: 'Data Updated Successfully'
          });
          this.$refs.full_name_input.$el.focus();
        } catch (err) {
          this.formSubmitting = false;
          this.$q.dialog({
            message: 'Data Updation failed'
          });
        }
      },
      async fetchData () {
        let httpClient = await this.$api.get('items/employers/' + this.id);
        this.formData = httpClient.data.data;
      }
    },
    
}
</script>

  