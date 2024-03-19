<template>
  <q-page class="page-container">
    <div class="colored-half bg-pink-10">
      <div class="colored-content">
        <div class="profile-completion">
          <div class="logo" style="width: 10px;height: 10px;"><img src='/icons/logo(1).png' alt="Logo"></div>
          <h2 style="font-size: 30px; margin-top:70px;margin-bottom: 100px;font-weight:bolder;">Complete your profile! 👋 </h2>
          <p>Unlock 100+ jobs from top companies and receive direct calls from HRs</p>
          <div style="margin-left: 20px;" >
            <div> <span class="mdi mdi-check-circle"></span> Takes only 3 steps</div>
            <div> <span class="mdi mdi-check-circle"></span>Stand out among other candidates</div>
            <div><span class="mdi mdi-check-circle"></span> Direct calls from top company HRs</div>
          </div>
        </div>
        <p class="trusted-by "style="margin-top:70px ;">Trusted by over 5 lakhs+ companies</p>
        <div><img src="/icon/Most-Famous-Logos-in-Blue(1).png"></div>
      </div>
   
    </div>
   
    <div class="form-half" style="margin-top:70px ;">
      <div class="flex">
       stepper
      </div>
      <div class="flex justify-center"style="margin-top: 12px;">
        <router-view/>
      </div>
      
    
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
  /* align-items: center; */
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
.logo{
  max-width: 10px;
  /* align-items: center; */
}

.tick {
  margin-right: 5px;
  color: green;
}

.trusted-by {
  margin-top: 20px; 
}



</style>
