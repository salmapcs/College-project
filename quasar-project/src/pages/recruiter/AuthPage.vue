<template>
  <q-page class="">
    <div class="top-sec ">
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

    <div class="hero-comp text-center" style="margin: 150px;">
        <div class="hc-1  " style="font-size: 25px;color:#1F8268;font-weight: 800;"> COMPANIES THAT HIRE FROM US</div><br>
        <div class="hc-2"><img src="public/companies/company-img.png" style="width: 1200px;height: 128px;margin-bottom: 80px;margin-top: 80px;"> </div>
      </div>

  </div>
<div class="hero-med text-center">
<div class="hc-1" style="margin-top: 0px;font-size: 25px;color:#1F8268;font-weight: 800;">APNA IN NEWS</div>
<h2 class="hm-1 " style="font-weight: 700;">Media & Mentions</h2>
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
.top-sec{
  background: radial-gradient(89% 84% at 100% 100%, rgb(246, 244, 255) 0%, rgb(255, 255, 255) 100%);
}
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