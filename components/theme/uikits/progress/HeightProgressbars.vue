<template>
    <CommonCard3 cardbodyClass="progress-showcase" cardClass="title-line" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Custom height progress bars" :desc="desc">
        <div class="row">
            <div class="col">
                <div class="progress" style="height: 1px;">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 25%" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress" style="height: 5px;">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress" style="height: 11px;">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 75%" aria-valuenow="75"
                        aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress" style="height: 19px;">
                    <div class="progress-bar bg-info" role="progressbar" style="width: 100%" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { height } from "~/core/data/uikits"
let desc = ref<string>("Set a height value on the <code>.progress-bar</code>, so if you change that value the outer<code>.progress</code> will automatically resize accordingly.")
</script>