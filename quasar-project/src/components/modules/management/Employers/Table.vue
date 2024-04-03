<template>
    <q-table :rows="rows" :columns="columns">
      <template v-slot:top>
        <div class="row items-center">
          <div class="text-h5 q-ma-sm">Employers</div>
          <q-btn label="Add" color="green" rounded class="q-ma-sm" to="./add" v-if="!$route.params.mode"></q-btn>
        </div>
      </template>
      <template v-slot:body-cell-name="props">
        <q-td>
          <div class="row items-center">
            <div class="bg-red">
  
              <q-img width="50px" fit="contain"
                :src="'http://localhost:8055/assets/' + props.row?.user_id?.avatar"></q-img>
  
  
            </div>
            <div class="col q-pa-md"> <span class="text-bold" style="font-size:16px"> </span></div>
          </div>
  
        </q-td>
      </template>
      <template v-slot:body-cell-actionControl="props">
        <q-td>
          <q-btn icon="visibility" :to="'./detail/' + props.row.id" unelevated color="green" dense></q-btn>
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
          { label: 'Name', field: 'name', name: 'name', align: 'left' },
          { label: 'Email Address', field: 'email', name: 'email', align: 'left' },
          { label: 'Contact Number', field: 'contact_number', name: 'contact_number', align: 'left' },
          { label: 'Action', field: '', name: 'actionControl' },
        ]
      }
    },
    methods: {
      async fetchData () {
        let httpClient = await this.$api.get('/items/employers', {
          params: {
            fields: [
              '*',
              'user_id.*'
            ]
          }
  
        })
        this.rows = httpClient.data.data
      },
      async deleteData (id) {
        this.$q.dialog({
          title: 'Deleting Employee',
          message: 'Are you sure?',
          cancel: true,
          persistent: true
        }).onOk(async () => {
  
          let httpClient = await this.$api.delete('/items/employers/' + id)
          this.fetchData()
        })
      }
    },
    created () {
      this.$mitt.on('module-data-changed:employers', this.fetchData)
      this.fetchData()
    }
  }
  </script>
  