<template>
    <q-table :rows="rows" :columns="columns">
      <template v-slot:top>
        <div class="row items-center">
          <div class="text-h5 q-ma-sm">Job Category</div>
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
          { label: 'Name', field: 'category_name', name: 'name', align: 'left' },
          { label: 'Description', field: 'description', name: 'description', align: 'left' },
          { label: 'Action', field: '', name: 'actionControl' },
        ]
      }
    },
    methods: {
      async fetchData () {
        let httpClient = await this.$api.get('/items/job_categories')
        this.rows = httpClient.data.data
      },
      async deleteData (id) {
        this.$q.dialog({
          title: 'Deleting Data',
          message: 'Are you sure?',
          cancel: true,
          persistent: true
  
        }).onOk(async () => {
          let httpClient = await this.$api.delete('/items/job_categories/' + id)
          this.fetchData()
        })
  
  
      }
    },
    created () {
      this.$mitt.on('module-data-changed:job_categories', this.fetchData)
      this.fetchData()
    }
  }
  </script>
  