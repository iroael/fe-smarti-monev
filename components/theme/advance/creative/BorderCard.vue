<template>
    <CommonCard3 colClass="col-12 col-md-6" v-for="(item, index) in positioncard" :key="index"
        :cardhaderClass="item.borderClass" pre="true" preClass="f-m-light mt-1" headerTitle="true" :title="item.heading"
        :desc="item.desc">
        <p :class="item.bodyTextClass">{{ item.bodyText }}</p>
        <p v-if="item.id == 1">Us Technology offers web & mobile development solutions for all industry
            verticals.Include a short form
            using fields that'll help your business understand who's contacting them.<br><strong>Visit Us: </strong>
            2600 Hollywood Blvd,Florida, United States- 33020<br><strong>Mail
                Us:</strong>contact@us@gmail.com<br><strong>Contact Number: </strong>(954) 357-7760</p>
        <form v-else-if="item.id == 2">
            <label class="form-label" for="exampleFormControlInput1">Email address</label>
            <input class="form-control" id="exampleFormControlInput1" type="email" placeholder="youremail@gmail.com">
        </form>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { positioncard } from "~/core/data/advance"
let desc = ref<string>("Star rating is displayed using <code>#u-rating-fontawesome-o </code> id using javascript.")
</script>