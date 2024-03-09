<template>
  <q-page>
    <div class="globaltext">
      <div class="content">
        <div class="dream-content">
          <p style="height:61px;">Your Dream</p>
        </div>
        <div class="job-content">
          Job is Waiting
        </div>
        <h5>Find your perfect career match among a multitude of opportunities</h5>

        <div class="search-bar">
          <search></search>
        </div>




      </div>
    </div>

  </q-page>
</template>

<script>
import search from 'src/components/modules/Home/search.vue';
import { ref } from 'vue'

export default {
  components: { search },
  setup() {
    return {

    }
  }
}
</script>

<style scoped>
.globaltext {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url('src/assets/bg_2.jpg.png');
  background-size: cover;

}

.content {
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  color: aliceblue;
}
.dream-content,
p {
  margin-bottom: 20px;
  font-size: 70px;
  font-weight: bolder;
}
.job-content {
  margin-bottom: 2px;
  font-size: 80px;
  font-weight: bolder;
}
h5 {
  margin-top: 0px;
}
.search-bar{
  margin:20px,30px,20px,20px ;
}
</style>
