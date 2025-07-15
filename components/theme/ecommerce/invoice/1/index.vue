<template>
    <table class="table-wrapper">
        <tbody ref="printArea">
            <tr>
                <td>
                    <table class="table-wrapper table-responsive custom-scrollbar logo-wrapper" style="width: 100%;">
                        <tbody>
                            <tr>
                                <td><img class="img-fluid for-light" src="/images/logo/logo.png" alt=""
                                        style="width:121px;"><img class="img-fluid for-dark"
                                        src="/images/logo/logo_dark.png" alt="" style="width:121px;"><span
                                        style="opacity: 0.8;display:block;margin-top: 10px;">202-555-0258</span></td>
                                <td class="address" style="text-align: right;opacity: 0.8; width: 16%;"><span>
                                        1982 Harvest Lane New York, NY12210
                                        United State</span></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td> <img class="banner-image" src="/images/email-template/invoice-1/1.png" alt="background"></td>
            </tr>
            <tr>
                <td>
                    <table class="bill-content" style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="width: 36%"><span style="opacity: 0.8;">Billed To</span>
                                    <h6 style="width: 46%">Yuri Matchett Vandelay Group LTD </h6>
                                </td>
                                <td style="width: 21%;"><span style="opacity: 0.8;">Invoice Date</span>
                                    <h6>09/03/2024</h6>
                                </td>
                                <td><span style="opacity: 0.8;">Invoice Number</span>
                                    <h6>#VL25000365</h6>
                                </td>
                                <td style="text-align: right;"><span style="opacity: 0.8;">Amount Dus (USD)</span>
                                    <h2>$10,908.00</h2>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 36%">
                                    <h6 style="width: 63%;padding-top: 20px;">2118 Thornridge Cir. Syracuse, Connecticut
                                        35624, United State</h6>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <ThemeEcommerceInvoice1Details />
        </tbody>
        <tbody>
            <tr style="width: 100%; display: flex; justify-content: space-between; margin-top: 12px;">
                <td> <img src="/images/email-template/invoice-1/sign.png" alt="sign"><span
                        style="display:block;background: rgba(82, 82, 108, 0.3);height: 1px;width: 200px;margin-bottom:10px;"></span><span
                        style="color: rgba(82, 82, 108, 0.8);">Authorized Sign</span></td>
                <td> <span style="display: flex; justify-content: end; gap: 15px;"><a
                            style="background: #009DB5; color:rgba(255, 255, 255, 1);border-radius: 10px;padding: 18px 27px;font-size: 16px;font-weight: 600;outline: 0;border: 0; text-decoration: none;"
                            href="#!" @click="print();">Print Invoice<i class="icon-arrow-right"
                                style="font-size:13px;font-weight:bold; margin-left: 10px;"></i></a><nuxt-link
                            style="background: #009DB533;color: #009DB5;border-radius: 10px;padding: 18px 27px;font-size: 16px;font-weight: 600;outline: 0;border: 0; text-decoration: none;"
                            to="/ecommerce/invoice/invoice_1" download="">Download<i class="icon-arrow-right"
                                style="font-size:13px;font-weight:bold; margin-left: 10px;"></i></nuxt-link></span></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
let printArea= ref();
function print(){
    if(printArea.value){
        window.print();
    }
}
</script>