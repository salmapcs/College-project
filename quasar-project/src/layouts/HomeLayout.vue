<template>
    <q-layout view="=lHh Lpr lFf">
    <q-header class="flex q-pa-md bg-green-8">

      <q-toolbar>
        <div class="flex col-2">
        <q-avatar class="logo">
          <img src="src/assets/logo.png" alt="Logo">
          <span>jobify</span>
        </q-avatar>
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
              <q-btn icon="mdi-account" to="/recruiter/auth/login"  @click="RecruiterLogin">Employee Login</q-btn>
              <q-btn icon="mdi-account-circle" to="/candidate/auth/login" @click="candidateLogin">Candidate Login</q-btn>
        </q-btn-group>
        </div>
      </q-toolbar>
    </q-header>
    </q-layout>
  </template>
  
  <script>
import RecruiterLogin from 'src/components/modules/auth/RecruiterLogin.vue';
import CandidateLogin from 'src/components/modules/auth/CandidateLogin.vue';

  export default {
    data() {
      return {
        navItems: [
          { label: 'Home', route: '/home' },
          { label: 'Find a Job', route: '/find-job' },
          { label: 'Post a Job', route: '/post-job' },
          { label: 'About', route: '/about' },
          { label: 'Contact', route: '/contact' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .logo img {
    max-height: 48px; 
  }
  
  
  </style>
  