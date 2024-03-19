<template>
  <q-page class="">
    <div class="hero-section q-ma-xl">

      <div class="hero-mainlayout">

        <div class="hero-submain column">
          <div class="hs-1" style="font-size: 16px;color:#1F8268;font-weight: 800;line-height: 1.5rem;margin: 0px 0px 1.45rem;padding: 0px;">INDIA’S #1 HIRING PLATFORM</div>

        <h1 class="hs-2" style="font-weight: bold;line-height: 1.1;margin: 0px 0px 1.45rem;padding: 0px;font-size: 5rem;">Find the right 
          candidate. Fast.</h1>

          <div class="hs-3" style="color: rgb(91, 94, 118);font-size: 20px; margin: 0px 0px 1.45rem;padding: 0px;">Trusted by 5 Cr+ Candidates | 6 Lakh+ Employers</div>
        </div>
        

      </div>
      
      <div class="hero-loginlayout">
        <!-- <router-view /> -->
        <RecruiterLogin></RecruiterLogin>
      </div>



    </div>

  </q-page>
</template>

<script>
import RecruiterLogin from 'src/components/modules/auth/RecruiterLogin.vue';

export default {
components:{RecruiterLogin}
}
</script>
<style>
.hero-section {
  max-width: 1200;
  display: flex;
}
.hero-submain{
  display: flex;
justify-content: space-between;
margin: 48px;

}
.hero-loginlayout{
  display: flex;
  justify-content: space-between;
}
</style>