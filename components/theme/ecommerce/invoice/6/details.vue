<template>
    <div>
        <div class="table-responsive invoice-table" id="table">
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <td class="item">
                            <h6 class="p-2 mb-0">Item Description</h6>
                        </td>
                        <td class="Hours">
                            <h6 class="p-2 mb-0">Hours</h6>
                        </td>
                        <td class="Rate">
                            <h6 class="p-2 mb-0">Rate</h6>
                        </td>
                        <td class="subtotal">
                            <h6 class="p-2 mb-0">Sub-total</h6>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Red Shirt</label>
                            <p class="m-0">Wild West - Red Cotton Blend Regular Fit Men's Formal Shirt.</p>
                        </td>
                        <td>
                            <p class="itemtext">5</p>
                        </td>
                        <td>
                            <p class="itemtext">$75</p>
                        </td>
                        <td>
                            <p class="itemtext">$375.00</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Brown Dress </label>
                            <p class="m-0">Aask - Brown Polyester Blend Women's Fit & Flare Dress.</p>
                        </td>
                        <td>
                            <p class="itemtext">3</p>
                        </td>
                        <td>
                            <p class="itemtext">$75</p>
                        </td>
                        <td>
                            <p class="itemtext">$225.00</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Flower Dress</label>
                            <p class="m-0">Skyblue Flower Printed Sleevless Strappy Dress.</p>
                        </td>
                        <td>
                            <p class="itemtext">10</p>
                        </td>
                        <td>
                            <p class="itemtext">$75</p>
                        </td>
                        <td>
                            <p class="itemtext">$750.00</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Red Skirt</label>
                            <p class="m-0">R L F - Red Cotton Blend Women's A-Line Skirt.</p>
                        </td>
                        <td>
                            <p class="itemtext">10 </p>
                        </td>
                        <td>
                            <p class="itemtext">$75</p>
                        </td>
                        <td>
                            <p class="itemtext">$750.00</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="itemtext"></p>
                        </td>
                        <td>
                            <p class="m-0">HST</p>
                        </td>
                        <td>
                            <p class="m-0">13%</p>
                        </td>
                        <td>
                            <p class="m-0">$419.25</p>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td class="Rate">
                            <h6 class="mb-0 p-2">Total</h6>
                        </td>
                        <td class="payment">
                            <h6 class="mb-0 p-2">$3,644.25</h6>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="row">
            <div class="col-md-8">
                <div>
                    <p class="legal"><strong>Thank you for your business!</strong>  Payment is expected within 31 days;
                        please process this invoice within that time. There will be a 5% interest charge per month on late
                        invoices.</p>
                </div>
            </div>
            <div class="col-md-4">
                <form class="text-end">
                    <input type="image" src="/images/other-images/paypal.png" name="submit"
                        alt="PayPal - The safer, easier way to pay online!">
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

