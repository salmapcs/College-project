<template>
    <q-form>
          <div class="row col q-pa-sm">
              <div class="col" style="margin-right:20px;">
                  <label for="institution">Institution</label>
                  <q-input outlined v-model="institution" placeholder="e.g. University of xyz" />
              </div>
              <div class="col" style="margin-right:20px;">
                  <label for="degree">Degree</label>
                  <q-input outlined v-model="degree" placeholder="e.g. Bachelor of Science" />
              </div>
              <div class="col" style="margin-right:20px;">
                  <label for="field">Field of Study</label>
                  <q-input outlined v-model="fieldOfStudy" placeholder="e.g. Computer Science" />
              </div>
          </div>
          <div class="row col q-pa-sm">
              <div class="col" style="margin-right:20px;">
                  <label for="start-date">Start Date</label>
                  <q-input color="grey-3" outlined v-model="startDate" label="Choose date">
                      <template v-slot:append>
                          <q-icon name="event" color="grey" />
                      </template>
                  </q-input>
              </div>
              <div class="col" style="margin-right:20px;">
                  <label for="end-date">End Date</label>
                  <q-input color="grey-3" outlined v-model="endDate" label="Choose date">
                      <template v-slot:append>
                          <q-icon name="event" color="grey" />
                      </template>
                  </q-input>
              </div>
          </div>
          <div class="row col q-pa-sm">
              <div class="col" style="margin-right:20px;">
                  <label for="grade">Grade/CGPA</label>
                  <q-input outlined v-model="grade" placeholder="e.g. 3.5/4.0" />
              </div>
              <div class="col" style="margin-right:20px;">
                  <label for="description">Description</label>
                  <q-input outlined v-model="description" placeholder="e.g. Major projects, achievements" />
              </div>
          </div>
          <div class="row col q-pa-sm flex-center">
              <div class="row">
                  <q-btn color="primary" text-color="white" label="Next" style="margin-right:20px;" />
                  <q-btn color="white" text-color="black" label="Cancel" />
              </div>
          </div>
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
        }
    }
}
</script>
