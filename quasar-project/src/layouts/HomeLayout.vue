<template>
  
    <q-layout view="=hHh Lpr lFf ">   
    <q-header class="flex q-pa-md bg-transparent">
      <q-toolbar style="color:wheat;" >
        <div class="navbarlogo flex col-2 ">
          <div class="logo"><img src="src/assets/logo.png" alt="Logo"></div>
          <div class="web-name">Jobzen</div>
        </div>
        <div class="flex col-6">
        <div>
         <q-btn-group flat>
            <q-btn
              v-for="(item, index) in navItems":key="index":label="item.label"
              @click="navigate(item.route)"
            />
          </q-btn-group>
        </div>
        </div>
        <div class="flex col-4">
          <q-btn-group flat>
            <RecruiterLoginButton></RecruiterLoginButton>
            <CandidateLoginButton></CandidateLoginButton>
            <q-btn icon="mdi-account" to="/management/auth/login"></q-btn>
          </q-btn-group>
        </div>
      </q-toolbar>
      </q-header>
      <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script>
import RecruiterLoginButton from 'src/components/modules/auth/RecruiterLoginButton.vue';
import CandidateLoginButton from 'src/components/modules/auth/CandidateLoginButton.vue';



  export default {
    components:{CandidateLoginButton,RecruiterLoginButton},
    
    data() {
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
  
  .bg-grey-8{
    background: #3a5d71 !important;
  }
  </style>
  
 
  