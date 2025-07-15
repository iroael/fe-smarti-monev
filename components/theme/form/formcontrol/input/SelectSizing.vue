<template>
    <CommonCard3 colClass="col-md-6" pre="true" cardBodyClass="custom-input" preClass="f-m-light mt-1" headerTitle="true"
        title="Select sizing " :desc="desc">
        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option selected>What's Your Hobbies </option>
            <option value="1">Kho-kho</option>
            <option value="2">Reading Books</option>
            <option value="3">Creativity</option>
        </select>
    </CommonCard3>
    <CommonCard3 colClass="col-md-6" pre="true" cardBodyClass="custom-input" preClass="f-m-light mt-1" headerTitle="true"
        title="Form control sizing" :desc="desc1">
        <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm"
            aria-label=".form-control-sm example">
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>(" <code>.form-select</code> to trigger the custom styles. You may also choose from small and large custom selects to match our similarly sized text inputs. class:- <code>[form-select-lg/form-select-sm]</code>.")
let desc1 = ref<string>("Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.")
</script>