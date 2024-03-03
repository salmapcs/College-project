<template>
    <q-form>
            <div class="row col q-pa-sm">
                <div class="column col" style="margin-right:20px;">
                    <label for="company">Company name</label>
                    <q-input outlined v-model="company" placeholder="e.g. ABC Corp"/>
                </div>
            </div>
            
            <div class="row col q-pa-sm">
                <div class="column col" style="margin-right:20px;">
                    <label for="company">Job title</label>
                    <q-input outlined v-model="title" placeholder="e.g. Software Engineer"/>
                </div>
            
                <div class="column col" style="margin-right:20px;">
                    <label for="position">Department</label>
                    <q-input outlined v-model="department" placeholder="Engineering"/>
                </div>
           
                <div class="row col q-pa-sm">
                <div class="column col" style="margin-right:20px;">
                    <label for="company">Position</label>
                    <q-input outlined v-model="position" placeholder="Lead Developer"/>
                </div> 
                </div>
            </div>
                <div class="column col" style="margin-right:20px;">
                    <div>
                    <label for="role">Role</label>
                    <q-input outlined v-model="role" placeholder="e.g. xyz.."/>
                    </div>
               </div>
            <div class="row col q-pa-sm">
                <div class="column col" style="margin-right:20px;">
                    <label for="from_date">Starting date</label>
                    <q-input color="grey-3" outlined v-model="fromDate" label="Choose date">
                    </q-input>
                </div>
                <div class="column col" style="margin-right:20px;">
                    <label for="to_date">Ending date</label>
                    <q-input color="grey-3" outlined v-model="toDate" label="Choose date"></q-input>
                </div>
            </div>
            <div class="row col q-pa-sm">
                <div class="column col" style="margin-right:20px;">
                    <label for="responsibilities">Responsibilities</label>
                    <q-input type="textarea" outlined v-model="responsibilities" />
                </div>
            </div>
            <div class="row col q-pa-sm">
                <div class="column col" style="margin-right:20px;">
                    <label for="responsibilities">Achievements</label>
                    <q-input type="textarea" outlined v-model="Achievments" />
                </div>
            </div>
            <div class="row col q-pa-sm flex-center">
                <div class="row">
                    <q-btn color="primary" text-color="white" label="Submit" @click="$router.replace('./')" style="margin-right:20px;" />
                    <q-btn color="white" text-color="black" label="Cancel" />
                </div>
            </div>
        </q-form>
</template>
<script>
export default {
    data() {
        return {
            company: '',
            position: '',
            fromDate: '',
            toDate: '',
            responsibilities: ''
        }
    }
}
</script>