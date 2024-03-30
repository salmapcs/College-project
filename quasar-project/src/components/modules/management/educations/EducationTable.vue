<template>
  <q-table :rows="rows" :columns="columns">
    <template v-slot:top>
      <div class="row items-center">
        <div class="text-h5 q-ma-sm">Educations</div>
        <q-btn label="Add" color="green" rounded class="q-ma-sm" to="./add" v-if="!$route.params.mode"></q-btn>
      </div>
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
        { label: 'Degree', field: 'degree', name: 'degree', align: 'left' },
        { label: 'Specification', field: 'specification', name: 'specification', align: 'left' },
        { label: 'Institute', field: 'institute', name: 'institute', align: 'left' },
        { label: 'Grade Point Average', field: 'grade_point_average', name: 'grade_point_average', align: 'left' },
        { label: 'Action', field: '', name: 'actionControl' },
      ]
    }
  },
  methods: {
    async fetchData () {
      try {
        let httpClient = await this.$api.get('/items/educations')
        this.rows = httpClient.data.data
      } catch (err) {

        console.error(err)
      }
    },
    async deleteData (id) {
      this.$q.dialog({
        title: 'Deleting Education',
        message: 'Are you sure?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        try {
          let httpClient = await this.$api.delete('/items/educations/' + id)
          this.fetchData()
          this.$q.dialog({
            message: 'Education Deleted Successfully'
          })
        } catch (err) {

          console.error(err)
        }
      })
    }
  },
  created () {
    this.$mitt.on('module-data-changed:educations', this.fetchData)
    this.fetchData()
  }
}
</script>
