<template>
    <q-table :rows="rows" :columns="columns">
      <template v-slot:top>
        <div class="row items-center">
          <div class="text-h5 q-ma-sm">Candidates</div>
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
          { label: 'First Name', field: 'first_name', name: 'first_name', align: 'left' },
          { label: 'Middle Name', field: 'middle_name', name: 'middle_name', align: 'left' },
          { label: 'Last Name', field: 'last_name', name: 'last_name', align: 'left' },
          { label: 'Email Address', field: 'email_address', name: 'email_address', align: 'left' },
          { label: 'Contact Number', field: 'contact_number', name: 'contact_number', align: 'left' },
          { label: 'Gender', field: 'gender', name: 'gender', align: 'left' },
          { label: 'Action', field: '', name: 'actionControl' },
        ]
      }
    },
    methods: {
      async fetchData () {
          let httpClient = await this.$api.get('/items/candidates')
          this.rows = httpClient.data.data
        },
      async deleteData (id) {
        this.$q.dialog({
          title: 'Deleting Candidate',
          message: 'Are you sure?',
          cancel: true,
          persistent: true
        }).onOk(async () => {
          
            let httpClient = await this.$api.delete('/items/candidates/' + id)
            this.fetchData()
        })
      }
    },
    created () {
      this.$mitt.on('module-data-changed:candidates', this.fetchData)
      this.fetchData()
    }
  }
  </script>
  