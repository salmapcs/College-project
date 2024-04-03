<template>
  <q-page class="flex bg-grey-2">
    <div class="colored-half bg-pink-10">
      <div class="colored-content">
        <div class="column">
          <div class=row>
            <!-- <div class="logo"><img width="80" src='/icons/logo (1).png' alt="Logo">
            </div> -->
            <div>
              <h2 style="font-size: 30px;font-weight:bolder;">Complete your profile!
                👋 </h2>
            </div>
          </div>

          <p>Unlock 100+ jobs from top companies and receive direct calls from HRs</p>
          <div style="margin-left: 20px;">
            <div> <span class="mdi mdi-check-circle"></span> Takes only 3 steps</div>
            <div> <span class="mdi mdi-check-circle"></span>Stand out among other candidates</div>
            <div><span class="mdi mdi-check-circle"></span> Direct calls from top company HRs</div>
          </div>
        </div>
        <p class="trusted-by ">Trusted by over 5 lakhs+ companies</p>
        <q-card flat>
          <img src="/icons/Most-Famous-Logos-in-Blue (1).png">
        </q-card>

      </div>
    </div>

    <div class="col q-pa-sm">

      <q-stepper :model-value="step" ref="stepper" color="primary" animated header-nav
        @update:model-value="val => $router.replace('./' + val)">
        <q-step name="basic" title="Basic" style="max-height:65vh">
          <BasicProfile />
        </q-step>
        <q-step name="education" title="Education" style="max-height:65vh">
          <EducationProfile />
        </q-step>
        <q-step name="experience" title="Experience" style="max-height:65vh">
          <ExperienceProfile></ExperienceProfile>
        </q-step>
      </q-stepper>
      <q-stepper-navigation>
        <q-btn @click="$refs.stepper.next()" color="primary" label="Continue" />
        <q-btn flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
      </q-stepper-navigation>

    </div>
  </q-page>

</template>

<script>
import BasicProfile from 'components/modules/profile/CandidateBasic.vue'
import EducationProfile from 'components/modules/profile/CandidateEducation.vue'
import ExperienceProfile from 'components/modules/profile/CandidateExperience.vue'
export default {
  components: { BasicProfile, EducationProfile, ExperienceProfile },
  props: ['step'],
  data () {
    return {
      stepper: {

      }
    }
  }
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

.logo {
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
