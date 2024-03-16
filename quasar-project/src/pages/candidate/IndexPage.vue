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
      
    
    <div class="section-service bg-grey-2">
      <div class="service-content bg-grey-2">
        <div class="content-box" style="padding-left: 170px;">
          <div class="content-block">
            <div class="icon"><img src="public/icons/resume-box.png"></div>
            <div class="heading-block">Search Millions of Jobs</div>
            <div class="description">Discover your dream job from millions of available opportunities worldwide.</div>
          </div>

          <div class="content-block">
            <div class="icon"><img src="public/icons/collaboration.png"></div>
            <div class="heading-block">Easy To Manage Jobs</div>
            <div class="description">Effortlessly manage your job applications, preferences, and communication.</div> 
          </div>

          <div class="content-block">
            <div class="icon"><img src="public/icons/team-support.png"></div>
            <div class="heading-block">Top Careers</div>
            <div class="description">Explore top career paths and growth opportunities in your field of expertise.</div>
          </div>
        
          <div class="content-block">
            <div class="icon"><img src="public/icons/employee.png"></div>
            <div class="heading-block">Search Experts Candidates</div>
            <div class="description">Find skilled candidates who match your job requirements and organizational culture.</div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-container">
      <div class="m1 grid-item ">
        <div class="column-container">
          <h2 class="text-bold align-center">Popular Searches on Jobzen</h2>
        </div>
      </div>

      <div class="m2 grid-item ">
        <div class="column-container">
          <div class="trend">TRENDING AT #1</div>
          <h3 class="sub-trend tc-1">Jobs for Freshers</h3>
          <div class="img-trend">
            <button class="link-view bg-deep-orange-7 " style="margin-right: 86px;">View All 
              <span> > </span></button>  
            <img src="public/icons/freshers-jobs.png">
          </div>

        </div>
      </div>

      <div class="m3 grid-item ">
        <div class="column-container">
          <div class="trend">TRENDING AT #2</div>
          <h3 class="sub-trend tc-2">Work from home Jobs</h3>
          <div class="img-trend">
            <button class="link-view bg-deep-purple-7" style="margin-right: 86px;">View All 
              <span> > </span></button>  
            <img src="public/icons/work-frm-home(1).png">
          </div>

        </div>
      </div>

      <div class="m4 grid-item ">
        <div class="column-container">
          <div class="trend">TRENDING AT #3</div>
          <h3 class="sub-trend tc-3">Part time Jobs</h3>
          <div class="img-trend">
            <button class="link-view bg-red-9" style="margin-right: 120px;margin-left: 10px;">View All 
              <span> > </span></button>  
            <img src="public/icons/part-time-jobs(1).png">
          </div>

        </div>
      </div>

      <div class="m5 grid-item ">
        <div class="column-container">
          <div class="trend">TRENDING AT #4</div>
          <h3 class="sub-trend tc-4">Jobs for Women</h3>
          <div class="img-trend">
            <button class="link-view bg-green-10 " style="margin-right: 120px;">View All 
              <span> > </span></button>  
            <img src="public/icons/women-jobs(1).png">
          </div>

        </div>
      </div>

      <div class="m6 grid-item">
        <div class="column-container">
          <div class="trend">TRENDING AT #5</div>
          <h3 class="sub-trend tc-5">International Jobs</h3>
          <div class="img-trend">
            <button class="link-view bg-blue-7"style="margin-right: 96px;">View All 
              <span> > </span></button>           
             <img src="public/icons/international-jobs.png">

          </div>

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
.tc-1 {
  color: #DE3700;
}

.tc-2 {
  color: #722ED1;
}

.tc-3 {
  color: #CC0000;
}

.tc-4 {
  color: #1F8268;
}

.tc-5 {
  color: #0074E8;
}

.m2 {
  background: linear-gradient(rgb(255, 255, 255),
      rgba(222, 55, 0, 0.14) 130%);
}

.m3 {
  background: linear-gradient(rgb(255, 255, 255), rgba(114, 46, 209, 0.14) 130%);
}

.m4 {
  background: linear-gradient(rgb(255, 255, 255), rgba(204, 0, 0, 0.14) 130%);
}

.m5 {
  background: linear-gradient(rgb(255, 255, 255), rgba(31, 130, 104, 0.14) 130%);
}

.m6 {
  background: linear-gradient(rgb(255, 255, 255), rgba(0, 116, 232, 0.14) 130%);
}

.trend {
  opacity: 1;
  margin-top: 22px;
  padding: 0px;
  color: darkgray;
  font-size: medium;
}

.sub-trend {
  margin-bottom: 0;
  margin-top: 0;
  font-size: 2.2rem;
  font-weight: bold;

}

.link-view {
  margin-top: 0px;
  margin-bottom: 12px;
  border-radius: 0.5rem;
  color:aliceblue;
  font-weight:20px;
  border: 0;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;
  padding: 100px 18px 80px 18px;
  margin-left: 120px;
  margin-right: 120px;

}

.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
  width: 402px;
  font-size: 20px;
  color: white;
  border-radius: 42px;
}

.column-container {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  text-align: left;
}

.work {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 50px;
}

.grid-item {
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
  background-size: cover;
  background-position: center;
}

.content-1 {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 30%;
  margin-left: 77px;
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

.search-bar {
  border-radius: 10px;
  height: 80px;
}

.section-service {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.service-content {
  width: 100%;
  height: 200px;
}

.content-box {
  display: flex;
  justify-content: space-evenly;
  padding: 0 144px;
}

.content-block {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

.icon img {
  filter: invert(52%) sepia(9%) saturate(2499%) hue-rotate(178deg) brightness(93%) contrast(89%);
  width: 60px;
}

.heading-block {
  font-size: 18px;
  font-weight: 500;
  padding-top: 12px;
  padding-bottom: 12px;
}

.description {
  margin-top: 5px;
}
</style>
