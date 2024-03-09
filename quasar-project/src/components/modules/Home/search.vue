<template>
    <div class="search-nav row ">
    <div class="row col-6" style="max-width: 300px;margin-left: 15px;margin-right: 171px;">
        <q-input borderless placeholder="Search by Job Title" >
            <template v-slot:prepend>
                    <q-icon name="search"></q-icon>
            </template>
        </q-input>
    </div>
    <q-separator  vertical class="q-ma-null row" />
    <div class="row col-4">
        <q-input  v-model="text" label="All Cities" borderless>
        <template v-slot:prepend>
          <q-icon name="location_on" />
        </template>
 
      </q-input>
    </div>
    <div class="row col-2">
        <q-btn class="btn bg-teal-8" label="Search Jobs"></q-btn>
    </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            location: 'all'
        }
    }
}
</script>
<style scoped>

.search-nav{
    padding-top: 10px;
    height: 30px; 
}
.btn{
    color: aliceblue;
    border-radius: 5px;
    height: 50px;
    margin-left:32px;
    margin-top:4px;

}
</style>