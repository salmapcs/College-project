<template>
    <q-table :rows="rows" :columns="columns">
      <template v-slot:top>
        <div class="row items-center">
          <div class="text-h5 q-ma-sm">Job Applications</div>
          <q-btn v-if="!$route.params.mode" label="Add" color="green" rounded class="q-ma-sm" @click="$router.push('/add')"></q-btn>
        </div>
      </template>
  
      <template v-slot:body-cell-actionControl="props">
        <q-td>
          <q-btn icon="edit" :to="'./edit/' + props.row.id" unelevated color="amber" dense></q-btn>
          <q-btn icon="delete" @click="deleteApplication(props.row.id)" unelevated color="red" dense></q-btn>
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
          { label: 'Applicant Name', field: 'applicant_name', name: 'applicant_name', align: 'left' },
          { label: 'Applicant Email', field: 'applicant_email', name: 'applicant_email', align: 'left' },
          { label: 'Job Description', field: 'job_description', name: 'job_description', align: 'left' },
          { label: 'Status', field: 'status', name: 'status', align: 'left' },
          { label: 'Action', field: '', name: 'actionControl' }
        ]
      };
    },
    methods: {
      async fetchData() {
        let httpClient = await this.$api.get('/items/job_applications');
        this.rows = httpClient.data.data;
      },
      async deleteApplication(id) {
        this.$q.dialog({
          title: 'Delete Application',
          message: 'Are you sure you want to delete this application?',
          cancel: true,
          persistent: true
        }).onOk(async () => {
          try {
            await this.$api.delete('/items/job_applications/' + id);
            this.fetchData();
          } catch (error) {
            console.error('Error deleting application:', error);
          }
        });
      }
    },
    created() {
      this.fetchData();
    }
  };
  </script>
  