<template>
  <q-page class="page-container">
    <div class="colored-half bg-teal-6">
      <!-- Content for the colored half -->
      <div class="colored-content">
        <div class="profile-completion">
          <h2 style="font-size: 24px; margin: 0 20px;">Complete your profile!👋 </h2>
          <p style="margin: 10px 20px;">Unlock 100+ jobs from top companies and receive direct calls from HRs</p>
          <ul style="margin-left: 20px;" >
            <li><span class="tick">✔</span> Takes only 3 steps</li>
            <li><span class="tick">✔</span> Stand out among other candidates</li>
            <li><span class="tick">✔</span> Direct calls from top company HRs</li>
          </ul>
        </div>
        <p class="trusted-by " style="margin-left: 20px;icon" >Trusted by over 5 lakhs+ companies</p>
        
        companies logo /icon
      </div>
   
    </div>
    <div class="form-half">
     
      <router-view/>
    </div>
  </q-page>
</template>

<script>
export default {
}
</script>

<style scoped>
.page-container {
  display: flex;
  height: 100%;
}

.colored-half {
  width: 30%; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px; 
}

.form-half {
  width: 70%; 
}

.colored-content {
  color: white;
  font-size: 16px;
}

.profile-completion {
  margin: 20px 0; 
}

.tick {
  margin-right: 5px;
  color: green;
}

.trusted-by {
  margin-top: 20px; 
}



</style>
