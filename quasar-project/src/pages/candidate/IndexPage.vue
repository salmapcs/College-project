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
          <h2 class="text-bold align-center" style="color: black;">Popular Searches on Jobzen</h2>
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

      <div class="m3 grid-item  ">
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







<div class="job-container">
<div class="text-center ">
  <h3 style="font-size: 32px;font-weight: 700;padding-top: 90px;">Job Openings in Top companies</h3>
</div>
<q-scroll-area style="height: 530px; max-width: 1600px;">
    <div class="grid-container " style="overflow-x: auto; white-space: nowrap;">
      
        <div class="row no-wrap " style="width: max-content;">
          <!-- <div v-for="n in 10" :key="n" class="m6 grid-item" style="margin-right: 20px;"> -->
            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ; margin-right: 27px;">
              <div class=""><img src="public/icons/jobpic/bajaj.jpg"></div>
              <div>Bajaj Allianz Life Insurance</div><br>
              <div>Provide of life insurence and financial services.</div>
              <div class="img-trend">
                <button class="link-view bg-green-7" style="margin-right: 96px;">View jobs <span> > </span></button>           
              </div>

            </div>
            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ; margin-right: 27px;">
              <div class=""><img src="public/icons/jobpic/ic-paytm.jpg"></div>
              <div>Paytm Service Pvt. Ltd.</div><br>
              <div>Digital payment and e-commerce facilitator.</div>
              <div class="img-trend">
                <button class="link-view bg-green-7" style="margin-right: 96px;">View jobs <span> > </span></button>           
              </div>

            </div>
            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ; margin-right: 27px;">
              <div class=""><img src="public/icons/jobpic/dunzo.jpg"></div>
              <div>Dunzo</div><br>
              <div>On demand delivery service provider.</div>
              <div class="img-trend">
                <button class="link-view bg-green-7" style="margin-right: 96px;">View jobs <span> > </span></button>           
              </div>
            </div>

            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ; margin-right: 27px;">
              <div class=""><img src="public/icons/jobpic/flipkart.png"></div>
              <div>Flipkart</div><br>
              <div>E-commerce and online shopping marketiplace.</div>
              <div class="img-trend">
                <button class="link-view bg-green-7" style="margin-right: 96px;">View jobs <span> > </span></button>           
              </div>
            </div>
            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ; margin-right: 27px;">
              <div class=""><img src="public/icons/jobpic/322333.jpg"></div>
              <div>Zomato</div><br>
              <div>Online food delivery marketplace.</div>
              <div class="img-trend">
                <button class="link-view bg-green-7" style="margin-right: 96px;">View jobs <span> > </span></button>           
              </div>
            </div>
            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ; margin-right: 27px;">
              <div class=""><img src="public/icons/jobpic/hdfc.png"></div>
              <div>Hdfc Bank</div><br>
              <div>Banking and financial service institution.</div>
              <div class="img-trend">
                <button class="link-view bg-green-7" style="margin-right: 96px;">View jobs <span> > </span></button>           
              </div>
            </div>
            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ; margin-right: 27px;">
              <div class=""><img src="public/icons/jobpic/ic-rapido.png"></div>
              <div>Rapido</div><br>
              <div>Bike taxi and ride-hailing service facilitator.</div>
              <div class="img-trend">
                <button class="link-view bg-green-7" style="margin-right: 96px;">View jobs <span> > </span></button>           
              </div>
            </div>
            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ; margin-right: 27px;">
              <div class=""><img src="public/icons/jobpic/ic-swiggy.jpg"></div>
              <div>Swiggy</div><br>
              <div>Food delivery and online ordering plateform.</div>
              <div class="img-trend">
                <button class="link-view bg-green-7" style="margin-right: 96px;">View jobs <span> > </span></button>           
              </div>
            </div>
            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ; margin-right: 27px;">
              <div class=""><img src="public/icons/jobpic/kotak-life.jpg"></div>
              <div>Kotak Life Insurance</div><br>
              <div>Life insurence and financial services company.</div>
              <div class="img-trend">
                <button class="link-view bg-green-7" style="margin-right: 96px;">View jobs <span> > </span></button>           
              </div>
            </div>

            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ; margin-right: 27px;">
              <div class=""><img src="public/icons/jobpic/lic.png"></div>
              <div>Lic India</div><br>
              <div>Life insurence and financial services organization.</div>
              <div class="img-trend">
                <button class="link-view bg-green-7" style="margin-right: 96px;">View jobs <span> > </span></button>           
              </div>
            </div>

            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ; margin-right: 27px;">
              <div class=""><img src="public/icons/jobpic/reliance-jio.png"></div>
              <div>reliance Jio</div><br>
              <div>Telecommunication and digital services provider.</div>
              <div class="img-trend">
                <button class="link-view bg-green-7" style="margin-right: 96px;">View jobs <span> > </span></button>           
              </div>
            </div>

            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ; margin-right: 27px;">
              <div class=""><img src="public/icons/jobpic/reliance-nippon.jpg"></div>
              <div>Reliance Nippon Life Insurance</div><br>
              <div>Life insurence and financial services firm.</div>
              <div class="img-trend">
                <button class="link-view bg-green-7" style="margin-right: 96px;">View jobs <span> > </span></button>           
              </div>
            </div>

            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ; margin-right: 27px;">
              <div class=""><img src="public/icons/jobpic/tata-aia.png"></div>
              <div>Tata AIA</div><br>
              <div>Life insurence and financial services organization.</div>
              <div class="img-trend">
                <button class="link-view bg-green-7" style="margin-right: 96px;">View jobs <span> > </span></button>           
              </div>
            </div>

            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ; margin-right: 27px;">
              <div class=""><img src="public/icons/jobpic/zepto.png"></div>
              <div>Zepto</div><br>
              <div>Delivery and logistics service facilitator</div>
              <div class="img-trend">
                <button class="link-view bg-green-7" style="margin-right: 96px;">View jobs <span> > </span></button>           
              </div>
            </div>

          
          <!-- </div> -->
        </div>
      
    </div>
  </q-scroll-area>
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

.sub-container{
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  text-align: left;
  border-radius: 35px;
}
.job-container{
  --tw-bg-opacity: 1;
 background-color: rgb(244 242 246 / var(--tw-bg-opacity));
 border-radius: 12px;
}

.scrollbarhide{
  scrollbar-width: none;
}
/* Styles for hover effect on m2, m3, m4, m5, m6 */

.m2:hover {
  border: 2px solid #DE3700;
}
.m3:hover {
  border: 2px solid #722ED1;
}
.m4:hover {
  border: 2px solid #CC0000;
}
.m5:hover {
  border: 2px solid #1F8268;
}
.m6:hover {
  border: 2px solid #0074E8;
}

/* Trending colors */
.tc-1 {
  color: #DE3700;
}
.tc-2 {
  color:#722ED1;
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

/* Background gradients */
.m2 {
  background: linear-gradient(rgb(255, 255, 255),rgba(222, 55, 0, 0.14) 130%);
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

/* Trending styles */
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

/* View all button */
.link-view {
  margin-top: 0px;
  margin-bottom: 12px;
  border-radius: 0.5rem;
  color: aliceblue;
  font-weight: 20px;
  border: 0;
}

/* Grid container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;
  padding: 80px 18px 80px 18px;
  margin-left: 120px;
  margin-right: 120px;
}

/* Grid items */
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

/* Column container */
.column-container {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  text-align: left;
}

/* Work grid */
.work {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 50px;
}

/* Content styles */
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

/* Service section */
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

/* Media queries for responsiveness */
@media screen and (max-width: 768px) {
  .content-1 {
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    margin-left: 0;
  }

  .work {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 30px;
  }

  .grid-container {
    margin-left: 20px;
    margin-right: 20px;
  }
}

@media screen and (max-width: 480px) {
  .content-1 {
    font-size: 18px;
  }

  .dream-content p {
    font-size: 40px;
  }

  .job-content {
    font-size: 50px;
  }

  .search-bar {
    height: 60px;
  }
}
</style>
