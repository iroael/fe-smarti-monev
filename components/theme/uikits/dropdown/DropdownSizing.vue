<template>
    <CommonCard3 colClass="col-md-6" cardClass="title-line height-equal" cardbodyClass="rtl-dropdown" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Dropdown sizing" :desc="desc">
        <div class="common-flex">
            <div class="btn-group">
                <button class="btn btn-info light btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Large button </button>
                <ul class="dropdown-menu dropdown-block">
                    <li><a class="dropdown-item" href="#">Small button</a></li>
                    <li><a class="dropdown-item" href="#">Medium button </a></li>
                    <li><a class="dropdown-item" href="#">Large button </a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Very large button </a></li>
                </ul>
            </div>
            <div class="btn-group">
                <button class="btn btn-dark light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Small button </button>
                <ul class="dropdown-menu dropdown-block">
                    <li><a class="dropdown-item" href="#">Small button </a></li>
                    <li><a class="dropdown-item" href="#">Very small button </a></li>
                    <li><a class="dropdown-item" href="#">Extra small button </a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Extra extra small </a></li>
                </ul>
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("When the<code>.show </code>class starts, dropdown appears. And <code>[.btn-lg/.btn-sm]</code>class through button size changed.")
</script>