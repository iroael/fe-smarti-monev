<template>
    <CommonCard3 colClass="col-md-6" pre="true" cardbodyClass="card-wrapper input-group-wrapper" preClass="f-m-light mt-1"
        headerTitle="true" title="Button addons " :desc="desc">
        <div class="input-group">
            <button class="btn btn-outline-primary" id="button-addon1" type="button">$ 25</button>
            <input class="form-control" type="text" placeholder="" aria-label="Example text with button addon"
                aria-describedby="button-addon1">
        </div>
        <div class="input-group">
            <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username"
                aria-describedby="button-addon2">
            <button class="btn btn-outline-primary" id="button-addon2" type="button">Submit</button>
        </div>
        <div class="input-group">
            <button class="btn btn-primary" type="button"><span>&#8364; </span></button>
            <button class="btn btn-success" type="button">0.0114419</button>
            <input class="form-control" type="text" placeholder="" aria-label="Example text with two button addons">
        </div>
        <div class="input-group">
            <input class="form-control" type="text" placeholder="Recipient's username"
                aria-label="Recipient's username with two button addons">
            <button class="btn btn-primary" type="button"> <span>&#8377;</span></button>
            <button class="btn btn-success" type="button">500</button>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>(" Multiple add-ons are supported and can be mixed with buttons input versions.")
</script>