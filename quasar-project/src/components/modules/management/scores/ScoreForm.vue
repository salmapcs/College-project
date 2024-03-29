<template>
    <q-form ref="form" class="q-gutter-md" :class="{ 'bg-amber-1': mode === 'edit' }">
      <div class="text-h5">
        {{ mode === 'add' ? 'Add Score' : 'Edit Score' }}
      </div>
      <q-input outlined label="Score" v-model="formData.score"></q-input>
  
      <q-input outlined label="Correct Answers" type="number" v-model="formData.correct_answer"></q-input>
  
      <q-input outlined label="Attempted Questions" type="number" v-model="formData.attempted_questions"></q-input>
  
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
        formData: {
          score: null,
          correct_answer: null,
          attempted_questions: null
        },
        formSubmitting: false
      }
    },
    methods: {
      async submitForm () {
        let valid = await this.$refs.form.validate()
        if (!valid) {
          return
        }
        this.formSubmitting = true
        try {
          let httpClient = await this.$api.post('items/score', this.formData)
          this.formSubmitting = false
          this.formData = {
            score: null,
            correct_answer: null,
            attempted_questions: null
          }
          this.$emit('score-added')
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
          let httpClient = await this.$api.patch('items/score/' + this.formData.id, this.formData)
          this.formSubmitting = false
          this.formData = {
            score: null,
            correct_answer: null,
            attempted_questions: null
          }
          this.$emit('score-updated')
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
        let httpClient = await this.$api.get('items/score/' + this.id)
        this.formData = httpClient.data.data
      }
    },
    created () {
      if (this.mode === 'edit') {
        this.fetchData()
      }
    }
  }
  </script>
  