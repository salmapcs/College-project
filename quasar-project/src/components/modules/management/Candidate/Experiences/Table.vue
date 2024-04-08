<template>
    <q-table :rows="rows" :columns="columns">
      <template v-slot:top>
        <div class="row items-center">
          <div class="text-h5 q-ma-sm">Experiences</div>
          <q-btn v-if="!$route.params.mode" label="Add" color="green" rounded class="q-ma-sm" to="./add"></q-btn>
        </div>
      </template>
  
      <template v-slot:body-cell-actionControl="props">
        <q-td>
          <q-btn icon="edit" :to="'./edit/' + props.row.id" unelevated color="amber" dense></q-btn>
          <q-btn icon="delete" @click="deleteExperience(props.row.id)" unelevated color="red" dense></q-btn>
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
          { label: 'Company Name', field: 'company_name', name: 'company_name', align: 'left' },
          { label: 'Department', field: 'department', name: 'department', align: 'left' },
          { label: 'Role', field: 'role', name: 'role', align: 'left' },
          { label: 'Responsibilities', field: 'responsibilities', name: 'responsibilities', align: 'left' },
          { label: 'Action', field: '', name: 'actionControl' }
        ]
      };
    },
    methods: {
      async fetchData() {
        let httpClient = await this.$api.get('/items/experiences');
        this.rows = httpClient.data.data;
      },
      async deleteExperience(id) {
        this.$q.dialog({
          title: 'Delete Experience',
          message: 'Are you sure you want to delete this experience?',
          cancel: true,
          persistent: true
        }).onOk(async () => {
          try {
            await this.$api.delete('/items/experiences/' + id);
            this.fetchData();
          } catch (error) {
            console.error('Error deleting experience:', error);
          }
        });
      }
    },
    created() {
      this.fetchData();
    }
  };
  </script>
  