<template>
    <CommonCard3 colClass="col-sm-12" table="true" cardClass="light-table-bg" text="true" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Responsive Tables With Light Background" :desc="desc">
        <div class="card-block row">
            <div class="col-sm-12 col-lg-12 col-xl-12">
                <div class="table-responsive theme-scrollbar">
                    <table class="table light-card">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Task</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Assign</th>
                                <th scope="col">Date</th>
                                <th scope="col">Price </th>
                                <th scope="col">Status</th>
                                <th scope="col">Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Web Development </td>
                                <td>Pixel@efo.com </td>
                                <td>+91 7874226671 </td>
                                <td>Mark Jecno </td>
                                <td>12/07/2024 </td>
                                <td>$2315.00 </td>
                                <td class="font-danger">Pending</td>
                                <td>75%</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Graphic Design </td>
                                <td>Strap@google.com </td>
                                <td>+91 8347855785 </td>
                                <td>Elana John </td>
                                <td>23/08/2024 </td>
                                <td>$4125.00 </td>
                                <td class="font-danger">Pending </td>
                                <td>45%</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>WordPress</td>
                                <td>Pixelstrap@gmail.com </td>
                                <td>+91 635609347 </td>
                                <td>John Deo</td>
                                <td>15/04/2024 </td>
                                <td>$6123.00 </td>
                                <td class="font-success">Done</td>
                                <td>100%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("A <code>.table-responsive ,.light-card</code> inside table element.")
</script>