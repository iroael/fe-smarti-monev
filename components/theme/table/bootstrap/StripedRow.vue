<template>
    <CommonCard3 colClass="col-sm-6" table="true" text="true" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Striped Row with Inverse Table" :desc="desc">
        <div class="card-block row">
            <div class="col-sm-12 col-lg-12 col-xl-12">
                <div class="table-responsive theme-scrollbar">
                    <table class="table table-inverse table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Dessert</th>
                                <th scope="col">Calories</th>
                                <th scope="col">Fat</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>KitKat</td>
                                <td>518</td>
                                <td>26</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Donut</td>
                                <td>452</td>
                                <td>25</td>
                                <td>80</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Eclair</td>
                                <td>262</td>
                                <td>16</td>
                                <td>10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Use <code>.table-striped</code> to add zebra-striping to any table row within the <code></code>. This styling doesn't work in IE8 and below as :nth-child CSS selector isn't supported.")
</script>