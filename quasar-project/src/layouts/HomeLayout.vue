<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="flex q-pa-md bg-grey-1">
      <q-toolbar style="color:black;">
        <div class="navbarlogo flex col-md-2 col-xs-6">
          <div class="logo "><img src="public/icons/logo jobzen.png" alt="Logo"></div>
          <div class="web-name text-bold">Jobzen</div>
        </div>
        <div class="flex col-md-6 col-xs-12" style="color:#848383;">
          <div>
            <q-btn-group flat>
              <q-btn v-for="(item, index) in navItems" :key="index" :label="item.label" @click="navigate(item.route)" />
            </q-btn-group>
          </div>
        </div>
        <div class="flex col-md-4 col-xs-12">
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
        { label: 'Contact', route: './contact' }
      ]
    };
  }
};
</script>

<style scoped>
.q-layout {
  min-height: 100vh;
}

.q-page-container {
  flex-grow: 1;
}

.FooterAll {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}

.navbarlogo {
  display: flex;
  align-items: center;
}

.logo img {
  max-height: 50px;
  border-radius: 10px;
}

.web-name {
  font-size: large;
  font-family: 'Times New Roman', Times, serif;
  margin-left: 5px;
}

/* Responsive styles */
@media (max-width: 600px) {
  .navbarlogo {
    flex-direction: column;
    align-items: center;
  }
  .web-name {
    margin-top: 5px;
  }
  .flex.col-md-2 {
    flex: 1;
    text-align: center;
  }
  .flex.col-md-6 {
    flex: 2;
  }
  .flex.col-md-4 {
    flex: 1;
    text-align: right;
  }
}
</style>
