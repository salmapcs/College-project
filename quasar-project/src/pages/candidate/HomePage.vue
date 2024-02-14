<template>
    <div class="row flex-center text-left">
           <h5>candidates -About me</h5>
    </div>
      
<div class="flex flex-center" style="min-width: 400px;">
</div>
<router-view></router-view>
</template>
<script>
import CandidateProfile from 'components/modules/profile/CandidateHomePage.vue'
export default {
    components: {CandidateHomePage}
}
</script>