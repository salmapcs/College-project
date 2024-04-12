<template>
  <div class="column q-gutter-md q-pa-md">


    <q-card class="q-pa-md column">
      <div class="text-h5 q-my-md text-bold">Basic Details</div>
      <div class="row">
        <div>
          <q-img width="150px" fit="contain" :src="'http://localhost:8055/assets/' + detail?.user_id?.avatar"></q-img>
        </div>
        <div class="col q-pa-md">
          <div class="column">
            <div class="row">
              <div><span class="text-bold text-primary">Name:</span></div>
              <div class="col q-mx-sm"> {{ detail?.full_name }} </div>


            </div>
            <div class="row">
              <div><span class=" text-bold text-primary">Contact Number :</span></div>
              <div class="col q-mx-sm"> {{ detail?.contact_number }}</div>


            </div>
           
          </div>
        </div>
      </div>
    </q-card>
    <q-card flat class="q-pa-md">
      <div class="text-h5 q-my-md text-bold">Qualifications</div>
      <div>
        <q-list>
          <q-item v-for="qualification of detail?.qualifications">
            <div class="row">
              <div class="text-uppercase text-primary text-bold">
                {{ qualification.qualifications_id.degree }}:
              </div>
              <div class="q-mx-md">
                {{ qualification.qualifications_id.name }}
              </div>
            </div>

          </q-item>

        </q-list>
      </div>
    </q-card>
    <q-card flat>
      Experience
    </q-card>
    <q-card flat>
      Certificates and Awards1
    </q-card>

  </div>

</template>
<script>
export default {
  props: ['dataId'],
  data () {
    return {
      detail: null
    }
  },
  watch: {
    dataId: {
      handler () {
        this.fetchData()
      },
      immediate: true
    }
  },
  methods: {
    async fetchData () {
      let httpClient = await this.$api.get('/items/candidates/' + this.dataId, {
        params: {
          fields: [
            '*',
            'user_id.*',
            'qualifications.*',
            'qualifications.qualifications_id.*'
          ]
        }
      })
      this.detail = httpClient.data.data
    }
  }
}
</script>
