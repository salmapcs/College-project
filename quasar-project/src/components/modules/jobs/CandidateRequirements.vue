<template>

 <q-form style="width: 600px; height: 100%;">
        
        <h5>Candidates Requirements</h5>
        
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right:20px;">
            <label for="minimum-education">Minimum Education <span style="color: red">*</span></label>
            <q-btn-toggle >
              <q-select v-for="option in educationOptions" :options="option" :label="option" />
            </q-btn-toggle>
          </div>
        </div>
      
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right:20px;">
            <label for="total-experience">Total Experience Required <span style="color: red">*</span></label>
            <q-input outlined v-model="totalExperience" placeholder="Enter total experience required" />
          </div>
        </div>
  
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right:20px;">
            <label for="english-level">English Level Required (Optional)</label>
            <q-btn-group v-model="englishLevel">
              <q-select label="Basic" />
              <q-select label="Intermediate" />
              <q-select label="Advanced" />
            </q-btn-group>
          </div>
        </div>
  
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right:20px;">
            <label for="additional-requirements">Additional Requirements (Optional)</label>
            <q-input outlined v-model="additionalRequirements" placeholder="Enter additional requirements" />
          </div>
        </div>
  
        <div class="row col q-pa-sm">
          <div class="col" style="margin-right:20px;">
            <label for="job-description">Job Description <span style="color: red">*</span></label>
            <q-input outlined v-model="jobDescription" placeholder="Enter job description" multi-line rows="4"/>
          </div>
        </div>
  
        <div class="row col q-pa-sm flex-center">
          <div class="row">
            <q-select color="green-10" text-color="white" label="Continue" style="margin-right:20px;" />
          </div>
        </div>
      </q-form>
    
</template>

<script>
  export default {
    data() {
      return {
        minimumEducation: '',
        educationOptions: ['High School', 'Associate Degree', 'Bachelor Degree', 'Master Degree', 'Ph.D.'],
        totalExperience: '',
        englishLevel: '',
        additionalRequirements: '',
        jobDescription: '',
      }
    }
  }
  </script>