<template>
  <q-form ref="form" class="q-gutter-md" :class="{ 'bg-amber-1': mode === 'edit' }">
    <div class="text-h5">
      {{ mode === 'edit' ? 'Edit Qualification' : 'Create Qualification' }}
    </div>
    <q-input ref="qualification_name_input" outlined label="Qualification Name" v-model="formData.qualification_name"
      :rules="[val => !!val || 'Mandatory Field']" :disable="mode === 'edit'"></q-input>

    <q-select outlined label="Degree" v-model="formData.degree" :options="degreeOptions" map-options
      option-label="text" emit-value option-value="value" :loading="status.loading" :error-message="status.error"
      :error="!!status.error"></q-select>

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
      status: {
        loading: false,
        error: false
      },
      degreeOptions: [
        { text: 'Bachelor\'s', value: 'bachelors' },
        { text: 'Master\'s', value: 'masters' },
        { text: 'PhD', value: 'phd' }
      ]
    };
  },
  methods: {
    async submitForm() {
      let valid = await this.$refs.form.validate();
      if (!valid) return;
      
      this.formSubmitting = true;
      try {
        const httpClient = await this.$api.post('/items/qualifications', this.formData);
        this.formSubmitting = false;
        this.$emit('form-submitted', httpClient.data); // Emit event for parent component
        this.$q.dialog({
          message: 'Data Submitted Successfully'
        });
        this.$router.go(-1);
      } catch (error) {
        this.formSubmitting = false;
        this.$q.dialog({
          message: 'Form Submission failed'
        });
        console.error('Form Submission failed:', error);
      }
    },
    async updateForm() {
      let valid = await this.$refs.form.validate();
      if (!valid) return;
      
      this.formSubmitting = true;
      try {
        const httpClient = await this.$api.patch(`/items/qualifications/${this.id}`, this.formData);
        this.formSubmitting = false;
        this.$emit('form-updated', httpClient.data); // Emit event for parent component
        this.$q.dialog({
          message: 'Data Updated Successfully'
        });
        this.$router.go(-1);
      } catch (error) {
        this.formSubmitting = false;
        this.$q.dialog({
          message: 'Data Updation failed'
        });
        console.error('Data Updation failed:', error);
      }
    },
    async fetchQualificationData() {
      try {
        const httpClient = await this.$api.get(`/items/qualifications/${this.id}`);
        this.formData = httpClient.data.data;
      } catch (error) {
        console.error('Failed to fetch qualification data:', error);
      }
    }
  },
  created() {
    if (this.mode === 'edit') {
      this.fetchQualificationData();
    }
  }
};
</script>
