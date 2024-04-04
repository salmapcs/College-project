<template>
    <q-table :rows="rows" :columns="columns">
      <template v-slot:top>
        <div class="row items-center">
          <div class="text-h5 q-ma-sm">Industries</div>
          <q-btn label="Add" color="green" rounded class="q-ma-sm" to="./industries/add" v-if="!$route.params.mode"></q-btn>
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
    data() {
      return {
        rows: [],
        columns: [
          { label: 'ID', field: 'id', name: 'id', align: 'left' },
          { label: 'Industry Name', field: 'industry_name', name: 'industry_name', align: 'left' },
          { label: 'Description', field: 'description', name: 'description', align: 'left' },
          { label: 'Status', field: 'status', name: 'status', align: 'left' },
          { label: 'Action', field: '', name: 'actionControl' }
        ]
      };
    },
    methods: {
      async fetchData() {
        try {
          const response = await this.$api.get('/items/industries');
          this.rows = response.data.data;
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
      },
      async deleteData(id) {
        this.$q.dialog({
          title: 'Deleting Data',
          message: 'Are you sure?',
          cancel: true,
          persistent: true
  
        }).onOk(async () => {
          try {
            await this.$api.delete(`/items/industries/${id}`);
            this.fetchData();
          } catch (error) {
            console.error('Failed to delete data:', error);
          }
        })
      }
    },
    created() {
      this.$mitt.on('module-data-changed:industries', this.fetchData);
      this.fetchData();
    }
  };
  </script>
  