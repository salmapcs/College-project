<template>
  <q-list>
    <q-item to="/management/Dashboard">
      <q-item-section avatar>
        <q-icon name="dashboard"></q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label >Dashboard</q-item-label>
      </q-item-section>
    </q-item>


    <q-expansion-item>
      <template v-slot:header>
        <q-item-section avatar>
          <q-icon name="list"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>Job Listings</q-item-label>
        </q-item-section>
      </template>

      <q-item to="/management/job/Post-job" style="color: #1F8268;">
        <q-item-section avatar>
          <q-icon name="format_list_bulleted"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>Post New Job</q-item-label>
        </q-item-section>
      </q-item>


  
      <q-item to="/management/job/Job-category" style="color: #1F8268;" >
        <q-item-section avatar>
          <q-icon name="school"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>Job Categories</q-item-label>
        </q-item-section>
      </q-item>
      
    </q-expansion-item>

    <q-expansion-item>
      <template v-slot:header>
        <q-item-section avatar>
          <q-icon name="work"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>Employers</q-item-label>
        </q-item-section>
      </template>

      <q-item to="/management/employer/job-list" style="color: #1F8268;">
        <q-item-section avatar>
          <q-icon name="format_list_bulleted"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>Job Listings</q-item-label>
        </q-item-section>
      </q-item>


  
      <q-item to="/management/employer/company-profile" style="color: #1F8268;" >
        <q-item-section avatar>
          <q-icon name="school"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>Company Profile</q-item-label>
        </q-item-section>
      </q-item>
      
    </q-expansion-item>
    
    <q-expansion-item >
      <template v-slot:header>
        <q-item-section avatar>
          <q-icon name="person"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Candidates</q-item-label>
        </q-item-section>
      </template>

      <q-item to="/management/skills/" style="color: #1F8268;">
        <q-item-section avatar>
          <q-icon name="circle"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>Skills</q-item-label>
        </q-item-section>
      </q-item>

      <q-item to="/management/candidate/education/" style="color: #1F8268;">
        <q-item-section avatar>
          <q-icon name="circle"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>Education</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/management/candidate/experience"style="color: #1F8268;">
        <q-item-section avatar>
          <q-icon name="circle"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label >Experience</q-item-label>
        </q-item-section>
      </q-item>
      
    </q-expansion-item>



    <q-item to="/management/notifications">
      <q-item-section avatar>
        <q-icon name="notifications"></q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label>Notifications</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/management/resources">
      <q-item-section avatar>
        <q-icon name="library_books"></q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label>Interview</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/management/help-support">
      <q-item-section avatar>
        <q-icon name="help"></q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label>Help & Support</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/management/account-settings">
      <q-item-section avatar>
        <q-icon name="settings"></q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label>Account Settings</q-item-label>
      </q-item-section>
    </q-item>

    <q-item to="/management/admin-panel">
      <q-item-section avatar>
        <q-icon name="admin_panel_settings"></q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label>Admin Panel</q-item-label>
      </q-item-section>
    </q-item>

    <q-item @click="logout">
      <q-item-section avatar>
        <q-icon name="logout"></q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label>Logout</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  methods: {
    logout() {
    
    }
  }
}
</script>
