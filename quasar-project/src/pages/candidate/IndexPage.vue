<template>
  <q-page>
    <div class="global">
      <div class="content-1">
        <div class="dream-content">
          <p style="height:61px;">Your Dream</p>
        </div>
        <div class="job-content">
          Job is Waiting
        </div>
        <h5>Find your perfect career match among a multitude of opportunities</h5>
        <div class="search-bar bg-grey-1">
          <search></search>
        </div>
      </div>
    </div>
    <div class="work grid">
      
      
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

.work{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
  grid-gap:50px;
}
/* .card{

} */
.grid-item{
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}
.global {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url('src/assets/bg_2.jpg.png');
  background-size:cover ;
  background-position:center ;
}

.content-1 {
  width:1000px;
  position: absolute;
  top: 50%;
  left: 30%;
  margin-left: 77px;
  transform: translate(-50%, -50%);
  color: aliceblue;
}
.dream-content,p {
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
  border-radius: 10px;
  height: 80px;
}
.section-service{
  width: 100%;
  height: 60vh;
}
</style>
