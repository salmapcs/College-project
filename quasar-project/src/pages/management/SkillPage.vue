<template>
  <q-page class="bg-grey-1">
    <div class="row">
      <div class="col-6 q-pa-md">
        <q-card class="q-pa-md">
          <router-view></router-view>
        </q-card>

      </div>
      <div class="col-6">
        <SkillTable />
      </div>
    </div>
  </q-page>
</template>
<script>
import SkillTable from 'components/modules/management/SkillTable.vue'
export default {
  components: { SkillTable }
}
</script>
