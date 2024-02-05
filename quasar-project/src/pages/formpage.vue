<template>
    <q-page class="fit q-pa-md">
    <div class="bg-purple-4" style="font-weight: bold; color: white;">
    
        <div class="row">
        <q-btn to="./about" label="about"></q-btn>
        <q-btn to="./contact" label="contact"></q-btn>
        <q-btn to="./education" label="education"></q-btn>
        <q-btn to="./project" label="project"></q-btn>
        <q-btn to="./skills" label="skills"></q-btn>
        </div>
    </div>
        <div > <router-view /></div>
    
    
    </q-page>
  </template>
  
  <script>
    export default {
     name: 'IndexPage',
    data(){
        return {
            links: [
                {
                    label:'about',
                    url: '/form/about'
                },
                {
                    label:'contact',
                    url: '/form/contact'
                },
                {
                    label:'education',
                    url: '/form/education'
                },
                {
                    label:'project',
                    url: '/form/project'
                },
                {
                    label:'skills',
                    url: '/form/skills'
                },

            ]
        }
    }
  }
  
  </script>