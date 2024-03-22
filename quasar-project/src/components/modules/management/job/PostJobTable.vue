<template>
    <q-table :rows="rows" :columns="columns">
      <template v-slot:top>
        <div class="row items-center">
          <div class="text-h5 q-ma-sm">Job Postings</div>
          <q-btn label="Add" color="green" rounded class="q-ma-sm" to="./add" v-if="!$route.params.mode"></q-btn>
        </div>
      </template>
      <template v-slot:body-cell-actionControl="props">
        <q-td>
          <q-btn icon="edit" :to="'./edit/' + props.row.id" unelevated color="amber" dense></q-btn>
          <q-btn icon="delete" @click="deleteData(props.row.id)" unelevated color="red" dense></q-btn>
        </q-td>
      </template>
    </q-table>
  </template>
  
  <script>
  export default {
    data () {
      return {
        rows: [],
        columns: [
          { label: 'ID', field: 'id', name: 'id', align: 'left' },
          { label: 'Job Title', field: 'job_posting_title', name: 'job_posting_title', align: 'left' },
          { label: 'Experience Level', field: 'experience_level', name: 'experience_level', align: 'left' },
          { label: 'Job Location', field: 'job_location', name: 'job_location', align: 'left' },
          { label: 'Qualification', field: 'qualification', name: 'qualification', align: 'left' },
          { label: 'Action', field: '', name: 'actionControl' },
        ]
      }
    },
    methods: {
      async fetchData () {
        try {
          let httpClient = await this.$api.get('/items/job_postings')
          this.rows = httpClient.data.data
        } catch (err) {
    
          console.error(err)
        }
      },
      async deleteData (id) {
        this.$q.dialog({
          title: 'Deleting Job Posting',
          message: 'Are you sure?',
          cancel: true,
          persistent: true
        }).onOk(async () => {
          try {
            let httpClient = await this.$api.delete('/items/job_postings/' + id)
            this.fetchData()
            this.$q.dialog({
              message: 'Job Posting Deleted Successfully'
            })
          } catch (err) {
    
            console.error(err)
          }
        })
      }
    },
    created () {
      this.$mitt.on('module-data-changed:job_postings', this.fetchData)
      this.fetchData()
    }
  }
  </script>
  