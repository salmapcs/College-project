<template>
  <q-table :rows="rows" :columns="columns">
    <template v-slot:body-cell-actionControl="props">

      <q-btn icon="delete" @click="deleteData(props.row.id)"></q-btn>
    </template>
  </q-table>
</template>
<script>
export default {
  data () {
    return {
      rows: [],
      columns: [
        { label: 'Name', field: 'skills_name', name: 'name', align: 'left' },
        { label: 'Level', field: 'skills_level', name: 'level', align: 'left' },
        { label: 'Action', field: '', name: 'actionControl' },
      ]
    }
  },
  methods: {
    async fetchData () {
      let httpClient = await this.$api.get('/items/skills')
      this.rows = httpClient.data.data
    },
    async deleteData (id) {
      this.$q.dialog({
        title: 'Deleting Data',
        message: 'Are you sure?',
        cancel: true,
        persistent: true

      }).onOk(async () => {
        let httpClient = await this.$api.delete('/items/skills/' + id)
        this.fetchData()
      })


    }
  },
  created () {
    this.fetchData()
  }
}
</script>
