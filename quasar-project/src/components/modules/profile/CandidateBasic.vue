<template>
  <q-form>
    <h6>About Me</h6>
    <div class="row">
      <div class="col">
        <label for="full Name">Full Name</label>
        <q-input outlined v-model="fullName" placeholder="e.g. Aman kumar roy" />
      </div>
    </div><br>
    <div class="row">
      <div class="column col">
        <label for="email">Email</label>
        <q-input outlined v-model="email" placeholder="e.g. amansroy234@gmail.com" />
      </div>
    </div><br>

    <div class="row col">
      <div class="col" style="margin-right:10px ;">
        <label for="contact">Contact No.</label>
        <q-input outlined v-model="contact" placeholder="e.g. +91-xxxxxxxxxx" />
      </div>
      <div class="col">
        <label for="dob">Date of Birth</label>
        <q-input v-model="date" filled type="date" />
      </div>
    </div><br>

    <div class="row col">
      <div class="col" style="margin-right: 20px;">
        <label for="city">City</label>
        <q-input outlined v-model="city" required />
      </div>
      <div class="col" style="margin-right: 20px;">
        <label for="state">State</label>
        <q-input outlined v-model="state" required />
      </div>
      <div class="col">
        <label for="pincode">Pincode</label>
        <q-input outlined v-model="pincode" required />
      </div>
    </div><br>

    <div class="row ">
      <div class="column col">
        <label for="address">Address</label>
        <q-input outlined v-model="address" />
      </div>
    </div><br>

    <div class="row">
      <div class="col">
        <label for="gender">Gender</label>
        <div>
          <q-radio v-model="gender" val="male" label="Male" />
          <q-radio v-model="gender" val="female" label="Female" />
        </div>
      </div>
    </div>

    <!-- <div class="row col q-pa-sm">
      <q-btn class="full-width" color="primary" text-color="white" label="Next"
        @click="$router.replace('./education')" />
    </div> -->
  </q-form>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      contact: '',
      dob: '',
      city: '',
      state: '',
      pincode: '',
      gender: '',
      address: ''
    };
  }
};
</script>

<style scoped>
/* .full-width {
  width: 100%;
} */
</style>
