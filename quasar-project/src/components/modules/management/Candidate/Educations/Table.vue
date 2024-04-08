<template>
    <q-table :rows="rows" :columns="columns">
      <template v-slot:top>
        <div class="row items-center">
          <div class="text-h5 q-ma-sm">Educations</div>
          <q-btn v-if="!$route.params.mode" label="Add" color="green" rounded class="q-ma-sm" to="./add"></q-btn>
        </div>
      </template>
  
      <template v-slot:body-cell-actionControl="props">
        <q-td>
          <q-btn icon="edit" :to="'./edit/' + props.row.id" unelevated color="amber" dense></q-btn>
          <q-btn icon="delete" @click="deleteEducation(props.row.id)" unelevated color="red" dense></q-btn>
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
          { label: 'Institution', field: 'institution', name: 'institution', align: 'left' },
          { label: 'Degree', field: 'degree', name: 'degree', align: 'left' },
          { label: 'Grade Point Average', field: 'grade_point_average', name: 'grade_point_average', align: 'left' },
          { label: 'Action', field: '', name: 'actionControl' }
        ]
      };
    },
    methods: {
      async fetchData() {
        let httpClient = await this.$api.get('/items/educations');
        this.rows = httpClient.data.data;
      },
      async deleteEducation(id) {
        this.$q.dialog({
          title: 'Delete Education',
          message: 'Are you sure you want to delete this education?',
          cancel: true,
          persistent: true
        }).onOk(async () => {
          try {
            await this.$api.delete('/items/educations/' + id);
            this.fetchData();
          } catch (error) {
            console.error('Error deleting education:', error);
          }
        });
      }
    },
    created() {
      this.fetchData();
    }
  };
  </script>
  