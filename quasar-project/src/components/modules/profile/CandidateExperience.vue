<template>
    <q-form class="flex justify-center q-mt-lg">
      <q-card class="q-pa-md" style="max-width: 500px;">
        <div class="row col q-py-md">
          <div class="col" style="margin-right: 20px;">
            <label for="company">Company name</label>
            <q-input outlined v-model="company" placeholder="e.g. ABC Corp" id="company" required />
          </div>
        </div>
        <div class="row col q-py-md">
          <div class="col" style="margin-right: 20px;">
            <label for="title">Job title</label>
            <q-input outlined v-model="title" placeholder="e.g. Software Engineer" id="title" required />
          </div>
          <div class="col" style="margin-right: 20px;">
            <label for="department">Department</label>
            <q-input outlined v-model="department" placeholder="Engineering" id="department" required />
          </div>
          <div class="col">
            <label for="position">Position</label>
            <q-input outlined v-model="position" placeholder="Lead Developer" id="position" required />
          </div>
        </div>
        <div class="row col q-py-md">
          <div class="col">
            <label for="role">Role</label>
            <q-input outlined v-model="role" placeholder="e.g. xyz.." id="role" required />
          </div>
        </div>
        <div class="row col q-py-md">
          <div class="col" style="margin-right: 20px;">
            <label for="from-date">Starting date</label>
            <q-input type="date" color="grey-3" outlined v-model="fromDate" label="Choose date" id="from-date" required />
          </div>
          <div class="col">
            <label for="to-date">Ending date</label>
            <q-input type="date" color="grey-3" outlined v-model="toDate" label="Choose date" id="to-date" required />
          </div>
        </div>
        <div class="row col q-py-md">
          <div class="col">
            <label for="responsibilities">Responsibilities</label>
            <q-input type="textarea" outlined v-model="responsibilities" id="responsibilities" required />
          </div>
        </div>
        <div class="row col q-py-md">
          <div class="col">
            <label for="achievements">Achievements</label>
            <q-input type="textarea" outlined v-model="achievements" id="achievements" />
          </div>
        </div>
        <div class="row col q-py-md flex-center">
          <q-btn color="primary" text-color="white" label="Submit" @click="$router.replace('/candidate')" style="width: 100%;" />
        </div>
      </q-card>
    </q-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        company: '',
        title: '',
        department: '',
        position: '',
        role: '',
        fromDate: '',
        toDate: '',
        responsibilities: '',
        achievements: ''
      }
    }
  }
  </script>
  