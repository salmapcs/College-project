<template>
  <q-table :rows="rows" :columns="columns">
    <template v-slot:top>
      <div class="row items-center">
        <div class="text-h5 q-ma-sm">Candidates</div>
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
          <div class="col q-pa-md"> <span class="text-bold" style="font-size:16px"> {{ props.row.first_name }} {{
    props.row.middle_name }} {{
    props.row.last_name
  }}</span></div>
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
        { label: 'Name', field: 'first_name', name: 'name', align: 'left' },
        { label: 'Email Address', field: 'email_address', name: 'email_address', align: 'left' },
        { label: 'Contact Number', field: 'contact_number', name: 'contact_number', align: 'left' },
        { label: 'Gender', field: 'gender', name: 'gender', align: 'left' },
        { label: 'Action', field: '', name: 'actionControl' },
      ]
    }
  },
  methods: {
    async fetchData () {
      let httpClient = await this.$api.get('/items/candidates', {
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
