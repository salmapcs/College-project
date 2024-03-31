<template>
  <q-page class="bg-grey-1">

    <div class="row" v-if="mode === 'detail'">
      <CandidateDetail :data-id="id" class="col" />
    </div>
    <div class="row" v-else>
      <div class="col-4 q-pa-md" v-if="['add', 'edit'].includes(mode)">
        <q-card class="q-pa-md">
          <router-view></router-view>

        </q-card>

      </div>
      <div class="q-pa-md" :class="{ 'col-8': mode, 'col-12': !mode }">
        <CandidateTable />
      </div>
    </div>
  </q-page>
</template>
<script>

import CandidateTable from 'components/modules/management/candidates/CandidateTable.vue';
import CandidateDetail from 'components/modules/management/candidates/Detail.vue';
export default {
  props: ['mode', 'id'],
  components: { CandidateTable, CandidateDetail }
}
</script>
