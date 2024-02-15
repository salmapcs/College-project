<template>
 <q-form>
    <div class="row col q-pa-sm">
        <div class="col" style="margin-right:20px;">
            <label for="company-name">Company Name</label>
            <q-input outlined v-model="companyName" placeholder="Enter company name" />
        </div>
    </div>

    <div class="row col q-pa-sm">
            <div class="col" style="margin-right:20px;">
            <label for="industry">Industry</label>
            <q-input outlined v-model="industry" placeholder="Enter industry" />
        </div>
    </div>
    
    <div class="row col q-pa-sm">
        <div class="col" style="margin-right:20px;">
            <label for="founded-year">Founded Year</label>
            <q-input color="grey-3" outlined v-model="foundedYear" label="Choose year">
                <template v-slot:append>
                    <q-icon name="event" color="grey" />
                </template>
            </q-input>
        </div>
        <div class="col" style="margin-right:20px;">
            <label for="employee-size">Employees Size</label>
            <q-input outlined v-model="companySize" placeholder="Enter employee size" />
        </div>
    </div>
    <div class="row col q-pa-sm">
        <div class="column col" style="margin-right:20px;">
            <label for="location">Location</label>
            <q-input outlined v-model="location" placeholder="Enter location" />
        </div>
    </div>
    <div class="row col q-pa-sm">
        <div class="column col" style="margin-right:20px;">
            <label for="description">Description</label>
            <q-input outlined v-model="description" placeholder="Enter company description" />
        </div>
    </div>
    <div class="row col q-pa-sm flex-center">
        <div class="row">
            <q-btn color="primary" text-color="white" label="Next" style="margin-right:20px;" />
            <q-btn color="white" text-color="black" label="Cancel"/>
        </div>
    </div>
</q-form>
</template>
<script>
export default {
    data() {
        return {
            companyName: '',
            industry: '',
            foundedYear: '',
            employeeSize: '',
            location: '',
            description: '',
        }
    }
}
</script>