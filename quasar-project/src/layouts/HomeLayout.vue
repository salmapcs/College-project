<template>

  <q-layout view="hHh Lpr lff">
    <q-header class="flex q-pa-md bg-grey-1">
      <q-toolbar style="color:black;">
        <div class="navbarlogo flex col-2 ">
          <div class="logo "><img src="public/icons/logo jobzen.png" alt="Logo"></div>
          <div class="web-name text-bold">Jobzen</div>
        </div>
        <div class="flex col-6" style="color:#848383;">
          <div>
            <q-btn-group flat>
              <q-btn v-for="(item, index) in navItems" :key="index" :label="item.label" @click="navigate(item.route)" />
            </q-btn-group>
          </div>
        </div>
        <div class="flex col-4">
          <q-btn-group flat>
            <q-btn icon="mdi-account-circle" color="primary" style="margin-right:10px ;"
              to="/recruiter/auth/login">Recruiter Login</q-btn>
            <CandidateLoginButton></CandidateLoginButton>
            <q-btn icon="mdi-account" style="margin-left:10px;" to="/management/auth/login"></q-btn>
          </q-btn-group>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterAll></FooterAll>


  </q-layout>
</template>


<script>

import CandidateLoginButton from 'src/components/modules/auth/CandidateLoginButton.vue';
import FooterAll from 'src/components/design/FooterAll.vue';



export default {
  components: { CandidateLoginButton, FooterAll },

  data () {
    return {


      navItems: [
        { label: 'Home', route: '/' },
        { label: 'Find a Job', route: '/find-job' },
        { label: 'About', route: '/about' },
        { label: 'Contact', route: '/contact' }
      ]
    };
    {
      label1: ref('click me')
    };

  }

};
</script>
<style scoped>
.q-layout {
  min-height: 100vh;
  /* Set the layout to fill the viewport height */
}

.q-page-container {
  flex-grow: 1;
  /* Allow the page container to grow to fill remaining space */
}

.FooterAll {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  /* Ensure the footer is above other content */
}


.navbarlogo {
  display: flex;
}

.logo img {
  max-height: 50px;
  align-items: center;
  border-radius: 10px;
}

.web-name {
  font-size: large;
  font-family: 'Times New Roman', Times, serif;
  margin-left: 5px;
  display: flex;
  align-items: end;
}
</style>
