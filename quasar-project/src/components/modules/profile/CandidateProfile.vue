<template>
<q-form>
      
      <div class="row col q-pa-sm">
          <div class="col" style="margin-right:20px;">
          <label for="Name">First Name</label>
          <q-input outlined v-model="text" placeholder="e.g. Aman"/>
          </div>
          <div class="col" style="margin-right:20px;">
          <label for="Name">Middle Name</label>
          <q-input outlined v-model="text" placeholder="e.g. Roy"/>
          </div>
          <div class="col" style="margin-right:20px;">
          <label for="Name">Last Name</label>
          <q-input outlined v-model="text" placeholder="e.g. Singh"/>
          </div>
      </div>
     
      <div class="row col q-pa-sm">
          <div class="column col" style="margin-right:20px;" >
          <label for="email">Email</label>
          <q-input outlined v-model="text" placeholder="e.g. amansroy234@gmail.com"/></div>
  
      </div>

      <div class="row col q-pa-sm" >
          <div class="col" style="margin-right:20px;">
          <label for="number">Contact No.</label>
          <q-input outlined v-model="text" placeholder="e.g. +91-xxxxxxxxxx"/></div>
  
          <div class="col" style="margin-right:20px;" >
          <label for="dob">Date of Birth</label>
          <q-input color="grey-3" outlined v-model="text" label="Choose date">
          <template v-slot:append>
            <q-icon name="event" color="grey" />
          </template>
           </q-input>
       </div>
      </div>
       <div class="row col q-pa-sm">
          <div class="col" style="margin-right:20px;">
          <label for="city/district">City</label>
          <q-input outlined v-model="text" required/>
          </div>
          <div class="col" style="margin-right:20px;">
          <label for="state">State</label>
          <q-input outlined v-model="text" required/>
          </div>
          <div class="col" style="margin-right:20px;">
          <label for="pincode">Pincode</label>
          <q-input outlined v-model="text" required/>
          </div>
      </div>
       <div class="row col q-pa-sm">
           <div class="col" style="margin-right:20px;">
          <label for="gender">Gender</label>
           <q-radio class="col" dense v-model="gender" val="Male" label="Male" />
           <q-radio class="col" dense v-model="gender" val="Female" label="Female" />
           </div>
      </div>
      <div class="row col q-pa-sm">
          <div class="column col" style="margin-right:20px;" >
          <label for="Address">Address</label>
          <q-input outlined v-model="text" /></div>
  
      </div> <br>

      <div class="row col q-pa-sm flex-center">
          <div class="row"  >
           <q-btn color="primary" text-color="white" label="Submit" style="margin-right:20px;" />
           <q-btn color="white" text-color="black" label="Cancel" />
           </div>
       </div>
</q-form>
</template>
<script>
export default {
    data(){
return {
    text: '',
    gender: ''
}
    }
}
</script>