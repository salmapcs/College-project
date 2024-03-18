<template>

  <q-layout view="=hHh Lpr lFf ">
    <q-header class="flex q-pa-md bg-grey-1">
      <q-toolbar style="color:black;">
        <div class="navbarlogo flex col-2 ">
          <div class="logo"><img src="public/icons/logo jobzen.png" alt="Logo"></div>
          <div class="web-name">Jobzen</div>
        </div>
      </q-toolbar>
    </q-header>
<q-page-container>
  <router-view></router-view>
</q-page-container>
  </q-layout>
</template>


<script>


export default {
  data () {
    return {

    }
    
  }

};

</script>
<style scoped>
#body{
 margin:0px 343px 0px 343px;
}
.navbarlogo {
  display: flex;
}

.logo img {
  max-height: 50px;
  align-items: center;
  border-radius: 10px;
}

.web-name {
  font-size: large;
  font-family: 'Times New Roman', Times, serif;
  margin-left: 5px;
  display: flex;
  align-items: end;
}

.homebg {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.homebg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
