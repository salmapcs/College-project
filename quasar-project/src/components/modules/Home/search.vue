<template>
    <div class="searchbar row bg-grey-1 q-pa-md">

    <div class="row col-5" style="max-width: 300px;">
        <q-input class="q-ma-null " borderless placeholder="Search by Job Title">
            <template v-slot:prepend>
                    <q-icon name="search"></q-icon>
            </template>
        </q-input>
    </div>
    <q-separator vertical class="q-ma-null" />


    <div class="row col-5">
        <q-input class="q-ma-null" v-model="text" label="All Cities" borderless>
        <template v-slot:prepend>
          <q-icon name="location_on" />
        </template>
        
      </q-input>
    </div>
    <div class="row col-1">
        <q-btn unelevated label="Search Jobs"></q-btn>
    </div>













    </div>
    <!-- <div class="row items-center">
        <div class="row col items-center">
            <q-input class="q-ma-null bg-grey-1" borderless placeholder="Search by Job Title">
                <template v-slot:prepend>
                    <q-icon name="search"></q-icon>
                </template>
            </q-input>
            <q-separator vertical class="q-ma-null" />

            <q-select borderless class="q-ma-sm bg-grey-1" map-options :options="[{ label: 'All Locations', value: 'all' }]"
                v-model="location">
                <template v-slot:prepend>
                    <q-icon name="location_on"></q-icon>
                </template>
            </q-select>
        </div>
        <div class="q-pa-md">
            <q-btn unelevated label="Search Jobs" color="teal-8" />
        </div>


    </div> -->
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
.searchbar{
    color:black;
}
</style>