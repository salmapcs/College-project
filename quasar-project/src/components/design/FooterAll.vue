<template>
    <!-- <q-footer class="footer bg-purple-10">
      <div class="footer-content flex">
         -->
         <footer>
    <div class="footer-container">
        <div class="footer-row">
            <div class="footer-column">
              <div class="f-title"><h2>Useful Links</h2></div>
                <div class="f-list"><ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Legal</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul></div>
            </div>
            <div class="footer-column">
              <div></div>
              <div class="f-title"><h2>About Us</h2></div>
                <p>Welcome to Jobzen, your ultimate destination for job seekers. We specialize in connecting talent with opportunity, providing a seamless platform for finding the perfect job match. Join us and take the next step in your career journey today!</p><br>
                <p>Additionally, we offer tailored solutions for companies seeking top talent, ensuring a smooth recruitment process and access to a pool of qualified candidates.</p>
             
            </div>
            <div class="footer-column">
              <div></div>
              <div class="f-title"><h2>Contact with us</h2></div>
                <ul>
                  <li><i class="fa-regular fa-comment"></i>Contact us</li>
                  <li><i class="fa fa-envelope"></i>infojobcompany23@gmail.com</li>
                  <li><i class="fa fa-phone"></i> +12879487322</li>
                </ul>
            </div>
        </div>
    </div>
</footer>



      <!-- </div>
    </q-footer> -->
  </template>
  
  <script>
  export default {
    name: 'FooterAll'
  }
  </script>
  
  <style scoped>
  footer {
    --tw-bg-opacity: 1;
    background-color: rgb(244 242 246 / var(--tw-bg-opacity));
    padding: 30px;
}

.footer-container {
    display: flex;
    justify-content: center;
}

.footer-row {
  display: flex;
    justify-content: space-between;
    max-width: 1200px; 
    width: 100%;
}

.footer-column {
  flex: 1; 
    margin: 0 10px;
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: center; 
}
.footer-column:nth-child(2) {
    flex: 3; 
}
.f-title {
    text-align: left; /* Align f-title content to the right */
    width: 100%; /* Ensure f-title takes full width */
}

.f-title h2 {
    text-align: left; /* Align h2 title to the right */
}

h2 {
    font-size: 20px;
    font-weight: bold;
}
.f-list ul {
    list-style-type: none;
    padding: 0;
    align-items: start;
    text-align: left; /* Align list items to the left */
}
ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    margin-bottom: 8px;
}

i {
    margin-right: 5px;
}


  </style>
  