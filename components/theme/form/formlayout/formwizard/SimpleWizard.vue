<template>
    <CommonCard3 colClass="col-md-12 simple-form-wizard" pre="true" preClass="f-m-light mt-1" cardClass="title-line"
        headerTitle="true" title="Simple Form Wizard" :desc="desc">
        <form-wizard @on-complete="onComplete">
            <tab-content>
                <div class="col-xs-12">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="control-label">First Name</label>
                            <input class="form-control" type="text" placeholder="Johan" required>
                        </div>
                        <div class="mb-3">
                            <label class="control-label">Last Name</label>
                            <input class="form-control" type="text" placeholder="Deo" required>
                        </div>
                    </div>
                </div>
            </tab-content>
            <tab-content>
                <div class="col-xs-12 ">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="control-label">Email</label>
                            <input class="form-control" type="text" placeholder="name@example.com" required>
                        </div>
                        <div class="mb-3">
                            <label class="control-label">Password</label>
                            <input class="form-control" type="password" placeholder="Password" required>
                        </div>
                    </div>
                </div>
            </tab-content>
            <tab-content>
                <div class="col-xs-12 ">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="control-label">Birth date</label>
                            <input class="form-control" type="date" required>
                        </div>
                        <div class="mb-3">
                            <label class="control-label">Have Passport</label>
                            <input class="form-control" type="text" placeholder="yes/No" required>
                        </div>
                    </div>
                </div>
            </tab-content>
            <tab-content>
                <div class="col-xs-12 ">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="control-label">State</label>
                            <input class="form-control mt-1" type="text" placeholder="State" required>
                        </div>
                        <div class="mb-3">
                            <label class="control-label">City</label>
                            <input class="form-control mt-1" type="text" placeholder="City" required>
                        </div>
                    </div>
                </div>
            </tab-content>
        </form-wizard>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { tab } from "~/core/data/forms"
import { FormWizard, TabContent } from "vue3-form-wizard";
import 'vue3-form-wizard/dist/style.css'
let desc = ref<string>("Use the different types of fades and animations in modals.")
const currentTabIndex = ref<number>()
function onComplete() {
    alert('Yay, Done')
}
onMounted(() => {
    currentTabIndex.value = 0
})
</script>