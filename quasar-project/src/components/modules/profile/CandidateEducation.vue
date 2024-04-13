<template>
  
  <q-form >
   <h6>Your highest education</h6>
      <div class="row col">
        <div class="col" style="margin-right: 20px;">
          <label for="institution">Institution</label>
          <q-input outlined v-model="institution" placeholder="e.g. University of xyz" id="institution" required />
        </div>
        <div class="col">
          <label for="degree">Degree</label>
          <q-input outlined v-model="degree" placeholder="e.g. Bachelor of Science" id="degree" required />
        </div>
      </div><br>
      <div class="row col">
        <div class="col">
          <label for="field">Field of Study</label>
          <q-input outlined v-model="fieldOfStudy" placeholder="e.g. Computer Science" id="field" required full-width />
        </div>
      </div><br>
      <div class="row col">
        <div class="col" style="margin-right: 20px;">
          <label for="start-date">Start Date</label>
          <q-input type="date" color="grey-3" outlined v-model="startDate" label="Choose date" id="start-date" required full-width>
          </q-input>
        </div>
        <div class="col">
          <label for="end-date">End Date</label>
          <q-input type="date" color="grey-3" outlined v-model="endDate" label="Choose date" id="end-date" required full-width>
          </q-input>
        </div>
      </div><br>
      <div class="row col">
        <div class="col">
          <label for="grade">Grade/CGPA</label>
          <q-input outlined v-model="grade" placeholder="e.g. 3.5/4.0" id="grade" required full-width />
        </div>
      </div><br>
      <div class="row col">
        <div class="col">
          <label for="description">Description</label>
          <q-input outlined v-model="description" placeholder="e.g. Major projects, achievements" id="description" full-width />
        </div>
      </div><br>
      <!-- <div class="row col">
        <q-btn color="primary" text-color="white" label="Next" @click="$router.replace('./experience')" style="width: 100%;" />
      </div> -->
  </q-form>
  
</template>

<script>
export default {
  data() {
    return {
      institution: '',
      fieldOfStudy: '',
      startDate: '',
      grade: '',
      endDate: '',
      degree: '',
      description: ''
    }
  }
}
</script>
