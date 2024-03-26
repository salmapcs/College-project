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
              <div class="description">Explore top career paths and growth opportunities in your field of expertise.
              </div>
            </div>

            <div class="content-block">
              <div class="icon"><img src="public/icons/employee.png"></div>
              <div class="heading-block">Search Experts Candidates</div>
              <div class="description">Find skilled candidates who match your job requirements and organizational
                culture.</div>
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
            <button class="link-view bg-blue-7" style="margin-right: 96px;">View All
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
      
      <q-scroll-area style="height: 530px; max-width: 1600px; overflow-x:auto ;">
        <div class="grid-container " style="white-space: nowrap;">

          <div class="row no-wrap " style="width: max-content;">

            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ;padding:27px; margin-right:27px ;">
              <div class="job-subcon" style="margin-top: 30px;"><img src="public/icons/jobpic/bajaj.jpg"></div><br>
              <div style="margin-top: 40px;font-size: 20px;font-weight: 700;">Bajaj Allianz Life Insurance</div><br>
              <div style="font-size: 16px;margin-top: 0.75rem;">Provide of life insurence and financial services.</div>
              <br>
              <div class="btnjob">
                <button class="link-view bg-green-10"
                  style="margin-right: 96px;margin-top: 22px;padding: 11px 14px ;">View jobs <span> > </span></button>
              </div>
            </div>

            <div class="sub-container bg-grey-1" style="width: 400px; height:340px ;padding: 27px; margin-right: 27px;">
              <div class="job-subcon" style="margin-top: 10px;"><img src="public/icons/jobpic/ic-paytm.png"></div><br>
              <div style="margin-top: 40px;font-size: 20px;font-weight: 700;">Paytm Service Pvt. Ltd.</div><br>
              <div style="font-size: 16px;margin-top: 0.75rem;">Digital payment and e-commerce facilitator.</div><br>
              <div class="btnjob">
                <button class="link-view bg-green-10"
                  style="margin-right: 96px;margin-top: 22px;padding: 11px 14px ;">View jobs <span> > </span></button>
              </div>
            </div>

            <div class="sub-container bg-grey-1"
              style="width: 400px; height:340px ;padding: 27px;  margin-right: 27px;">
              <div class="job-subcon" style="margin-top: 30px;"><img src="public/icons/jobpic/dunzo.png"></div><br>
              <div style="margin-top: 40px;font-size: 20px;font-weight: 700;">Dunzo</div><br>
              <div>On demand delivery service provider.</div><br>
              <div class="btnjob">
                <button class="link-view bg-green-10"
                  style="margin-right: 96px;margin-top: 25px;padding: 11px 14px ;">View jobs <span> > </span></button>
              </div>
            </div>

            <div class="sub-container bg-grey-1"
              style="width: 400px; height:340px ;padding: 27px;  margin-right: 27px;">
              <div class="job-subcon"><img src="public/icons/jobpic/flipkart.png"></div><br>
              <div style="margin-top: 40px;font-size: 20px;font-weight: 700;">Flipkart</div><br>
              <div>E-commerce and online shopping marketiplace.</div><br>
              <div class="btnjob">
                <button class="link-view bg-green-10"
                  style="margin-right: 96px;margin-top: 22px;padding: 11px 14px ;">View jobs <span> > </span></button>
              </div>
            </div>
            <div class="sub-container bg-grey-1"
              style="width: 400px; height:340px ;padding: 27px;  margin-right: 27px;">
              <div class="job-subcon"><img src="public/icons/jobpic/322333.jpg"></div><br>
              <div style="margin-top: 40px;font-size: 20px;font-weight: 700;">Zomato</div><br>
              <div>Online food delivery marketplace.</div><br>
              <div class="btnjob">
                <button class="link-view bg-green-10"
                  style="margin-right: 96px;margin-top: 22px;padding: 11px 14px ;">View jobs <span> > </span></button>
              </div>
            </div>
            <div class="sub-container bg-grey-1"
              style="width: 400px; height:340px ;padding: 27px;  margin-right: 27px;">
              <div class="job-subcon"><img src="public/icons/jobpic/hdfc.png"></div><br>
              <div style="margin-top: 40px;font-size: 20px;font-weight: 700;">Hdfc Bank</div><br>
              <div>Banking and financial service institution.</div><br>
              <div class="btnjob">
                <button class="link-view bg-green-10"
                  style="margin-right: 96px;margin-top: 22px;padding: 11px 14px ;">View jobs <span> > </span></button>
              </div>
            </div>
            <div class="sub-container bg-grey-1"
              style="width: 400px; height:340px ;padding: 27px;  margin-right: 27px;">
              <div class="job-subcon"><img src="public/icons/jobpic/ic-rapido.png"></div><br>
              <div style="margin-top: 40px;font-size: 20px;font-weight: 700;">Rapido</div><br>
              <div>Bike taxi and ride-hailing service facilitator.</div><br>
              <div class="btnjob">
                <button class="link-view bg-green-10"
                  style="margin-right: 96px;margin-top: 22px;padding: 11px 14px ;">View jobs <span> > </span></button>
              </div>
            </div>
            <div class="sub-container bg-grey-1"
              style="width: 400px; height:340px ;padding: 27px;  margin-right: 27px;">
              <div class="job-subcon"><img src="public/icons/jobpic/ic-swiggy.png"></div><br>
              <div style="margin-top: 40px;font-size: 20px;font-weight: 700;">Swiggy</div><br>
              <div>Food delivery and online ordering plateform.</div><br>
              <div class="btnjob">
                <button class="link-view bg-green-10"
                  style="margin-right: 96px;margin-top: 22px;padding: 11px 14px ;">View jobs <span> > </span></button>
              </div>
            </div>
            <div class="sub-container bg-grey-1"
              style="width: 400px; height:340px ;padding: 27px;  margin-right: 27px;">
              <div class="job-subcon"><img src="public/icons/jobpic/kotak-life.jpg"></div><br>
              <div style="margin-top: 40px;font-size: 20px;font-weight: 700;">Kotak Life Insurance</div><br>
              <div>Life insurence and financial services company.</div><br>
              <div class="btnjob">
                <button class="link-view bg-green-10"
                  style="margin-right: 96px;margin-top: 22px;padding: 11px 14px ;">View jobs <span> > </span></button>
              </div>
            </div>

            <div class="sub-container bg-grey-1"
              style="width: 400px; height:340px ;padding: 27px;  margin-right: 27px;">
              <div class="job-subcon"><img src="public/icons/jobpic/lic.png"></div><br>
              <div style="margin-top: 40px;font-size: 20px;font-weight: 700;">Lic India</div><br>
              <div>Life insurence and financial services organization.</div><br>
              <div class="btnjob">
                <button class="link-view bg-green-10"
                  style="margin-right: 96px;margin-top: 22px;padding: 11px 14px ;">View jobs <span> > </span></button>
              </div>
            </div>

            <div class="sub-container bg-grey-1"
              style="width: 400px; height:340px ;padding: 27px;  margin-right: 27px;">
              <div class="job-subcon"><img src="public/icons/jobpic/reliance-jio.png"></div><br>
              <div style="margin-top: 40px;font-size: 20px;font-weight: 700;">reliance Jio</div><br>
              <div>Telecommunication and digital services provider.</div><br>
              <div class="btnjob">
                <button class="link-view bg-green-10"
                  style="margin-right: 96px;margin-top: 22px;padding: 11px 14px ;">View jobs <span> > </span></button>
              </div>
            </div>

            <div class="sub-container bg-grey-1"
              style="width: 400px; height:340px ;padding: 27px;  margin-right: 27px;">
              <div class="job-subcon"><img src="public/icons/jobpic/reliance-nippon.jpg"></div><br>
              <div style="margin-top: 40px;font-size: 20px;font-weight: 700;">Reliance Nippon Life Insurance</div><br>
              <div>Life insurence and financial services firm.</div><br>
              <div class="btnjob">
                <button class="link-view bg-green-10"
                  style="margin-right: 96px;margin-top: 22px;padding: 11px 14px ;">View jobs <span> > </span></button>
              </div>
            </div>

            <div class="sub-container bg-grey-1"
              style="width: 400px; height:340px ;padding: 27px;  margin-right: 27px;">
              <div class="job-subcon" style="margin-top: 30px;"><img src="public/icons/jobpic/tata-aia.png"></div><br>
              <div style="margin-top: 40px;font-size: 20px;font-weight: 700;">Tata AIA</div><br>
              <div>Life insurence and financial services organization.</div><br>
              <div class="btnjob">
                <button class="link-view bg-green-10"
                  style="margin-right: 96px;margin-top: 22px;padding: 11px 14px ;">View jobs <span> > </span></button>
              </div>
            </div>

            <div class="sub-container bg-grey-1"
              style="width: 400px; height:340px ; padding: 27px; margin-right: 27px;">
              <div class="job-subcon" style="margin-top: 30px;"><img src="public/icons/jobpic/zeptoo.png"></div><br>
              <div style="margin-top: 40px;font-size: 20px;font-weight: 700;">Zepto</div><br>
              <div>Delivery and logistics service facilitator</div><br>
              <div class="btnjob">
                <button class="link-view bg-green-10"
                  style="margin-right: 96px;margin-top: 22px;padding: 11px 14px ;">View jobs <span> > </span></button>
              </div>
            </div>


            <!-- </div> -->
          </div>


        </div>
      </q-scroll-area>
      <br>

      <div style="text-align: center;">
        <q-btn size="22px" class="btn-2 q-px-xl q-py-xs" style="width: 400px; margin: 12px 20px;border-radius: 22px;">
          <span>View All</span>
          <span style="margin-left: 5px;">&gt;</span>
        </q-btn>
      </div>
    </div>

    <div class="employee-container flex border bg-[#ee4] bg-gradient-t0-r from-[#f6fdfb] to-[#ecfefa] px-4" style="padding:20px 80px 20px 80px ;margin: 50px 100px 50px 100px;">

      <div class="img-employee flex col">
        <img src="public/two-peoplee.png" alt="">
      </div>

      <div class="sub-employee flex col">
      <div>
          <div class="se-1" >JOBZEN FOR EMPLOYERS</div>
          <div ><h2 class="text-bold se-2 text-color-#005F3E" >Want to Hire?</h2></div>
          <div class="se-3">Find the best candidate from 5 crore+ active job seekers!</div>
          <div>
            <q-btn class="se-4 ">Post job ></q-btn>
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

/* Employee container style */

.employee-container{
  border: 0 solid #e5e7eb;
  background-color: rgba(237, 254, 250, 1);
    border-radius: 24px;
}
.se-1{
font-size: 20px;
color:#1F8268;
background-color: #EAF8F4;
width: 250px;
    font-size: bold;
    font-weight: 700;
    margin-top: 25px;
}
.se-2{
  color:#005F3E;
  margin-bottom:0px;
}
.se-3{
font-size: 20px;
margin: 12px 0px 12px 0px;
}
.se-4{
  border-radius: 8px;
    text-align: center;
    padding: 0px 12px;
    cursor: pointer;
    transition-duration: 200ms;
    font-weight: 500;
    background: transparent;
    border: 1px solid rgb(31, 130, 104);
    width: auto;
    color: rgb(31, 130, 104);
    height: 48px;
    font-size: 1rem;
    line-height: 1;
    width: 292px;
    margin-top: 32px;
    font-weight: 600;
}
.se-4:hover{
  background-color: #1B5E20;
  color: aliceblue;
}

/* Style for job opening in top companies */
.btn-2:hover {
  background-color: #1B5E20;
  color: aliceblue;
}

.sub-container {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  text-align: left;
  border-radius: 25px;
}

.sub-container:hover {
  border: 0 solid #0c3c9d;
}

.job-container {
  --tw-bg-opacity: 1;
  background-color: rgb(244 242 246 / var(--tw-bg-opacity));
  border-radius: 12px;
  padding-bottom: 80px;

}

.scrollbarhide {
  scrollbar-width: center;
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

/* Background gradients */
.m2 {
  background: linear-gradient(rgb(255, 255, 255), rgba(222, 55, 0, 0.14) 130%);
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
