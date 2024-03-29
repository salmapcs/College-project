<template>
    <q-table :rows="rows" :columns="columns">
      <template v-slot:top>
        <div class="row items-center">
          <div class="text-h5 q-ma-sm">Experiences</div>
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
          { label: 'Company Name', field: 'company_name', name: 'company_name', align: 'left' },
          { label: 'Job Title', field: 'job_title', name: 'job_title', align: 'left' },
          { label: 'Department', field: 'department', name: 'department', align: 'left' },
          { label: 'Role', field: 'role', name: 'role', align: 'left' },
          { label: 'Responsibilities', field: 'responsibilities', name: 'responsibilities', align: 'left' },
          { label: 'Acheivements', field: 'acheivements', name: 'acheivements', align: 'left' },
          { label: 'Action', field: '', name: 'actionControl' },
        ]
      }
    },
    methods: {
      async fetchData () {
        try {
          let httpClient = await this.$api.get('/items/experiences')
          this.rows = httpClient.data.data
        } catch (err) {
        
          console.error(err)
        }
      },
      async deleteData (id) {
        this.$q.dialog({
          title: 'Deleting Experience',
          message: 'Are you sure?',
          cancel: true,
          persistent: true
        }).onOk(async () => {
          try {
            let httpClient = await this.$api.delete('/items/experiences/' + id)
            this.fetchData()
            this.$q.dialog({
              message: 'Experience Deleted Successfully'
            })
          } catch (err) {
            
            console.error(err)
          }
        })
      }
    },
    created () {
      this.$mitt.on('module-data-changed:experiences', this.fetchData)
      this.fetchData()
    }
  }
  </script>
  