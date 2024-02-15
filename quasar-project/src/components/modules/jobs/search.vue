<template>
    <div class="row items-center">
        <div class="row col items-center">
            <q-input class="q-ma-sm" borderless placeholder="Search by Job Title">
                <template v-slot:prepend>
                    <q-icon name="search"></q-icon>
                </template>
            </q-input>
            <q-separator vertical class="q-my-sm" />
            <q-select borderless class="q-ma-sm" map-options :options="[{ label: 'All Locations', value: 'all' }]"
                v-model="location">
                <template v-slot:prepend>
                    <q-icon name="location_on"></q-icon>
                </template>
            </q-select>
        </div>
        <div class="q-pa-md">
            <q-btn unelevated label="Search Jobs" color="teal-8" />
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