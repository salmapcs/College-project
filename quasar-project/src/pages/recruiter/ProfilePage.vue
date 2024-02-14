<template>
    <q-card>
        <div class="row flex-center text-left">
        <h5>About Company</h5>
    </div>
    
    <div class="flex flex-center" style="min-width: 400px;">
        </div>
        <RecruiterProfile />
    </q-card>
</template>
<script>
import RecruiterProfile from 'components/modules/profile/RecruiterProfile.vue'
export default {
    components: {RecruiterProfile}
}
</script>