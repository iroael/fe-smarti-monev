<template>
    <div>
        <div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="d-flex">
                        <div class="media-left"><img class="media-object img-60 for-light"
                                src="/images/other-images/logo-login.png" alt=""><img class="media-object img-60 for-dark"
                                src="/images/other-images/logo-login-dark.png" alt=""></div>
                        <div class="flex-grow-1 m-l-20 text-right">
                            <h4 class="media-heading">Yuri </h4>
                            <p>hello@Yuri.in<br><span>289-335-6503</span></p>
                        </div>
                    </div>

                </div>
                <div class="col-sm-6">
                    <div class="text-md-end text-xs-center">
                        <h3>Invoice #<span class="counter">
                                <number class="bold counter" ref="number1" :from="0" :to="1069" :duration="5" :delay="0"
                                    easing="Power1.easeOut" />
                            </span></h3>
                        <p>Issued: May<span> 27, 2024</span><br> Payment Due: June <span>27, 2024</span></p>
                    </div>

                </div>
            </div>
        </div>
        <hr>

        <div class="row">
            <div class="col-md-4">
                <div class="d-flex">
                    <div class="media-left"><img class="media-object rounded-circle img-60" src="/images/user/1.jpg" alt="">
                    </div>
                    <div class="flex-grow-1 m-l-20">
                        <h4 class="media-heading">Johan Deo</h4>
                        <p>JohanDeo@gmail.com<br><span>555-555-5555</span></p>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="text-md-end" id="project">
                    <h6>Project Description</h6>
                    <p>You're Only As Good As Your Last Collection, Which Is An Enormous Pressure. Jeans Represent Democracy
                        In Fashion.Fashion Is About Dressing According To What's Fashionable.</p>
                </div>
            </div>
        </div>
        <ThemeEcommerceInvoice6Details />
    </div>
</template>

<script setup lang="ts">

</script>

