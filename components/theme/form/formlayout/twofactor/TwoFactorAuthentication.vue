<template>
    <CommonCard3 colClass="col-md-12" cardbodyClass="authentication-body">
        <div class="authentication-wrapper">
            <h2>Two-factor Authentication</h2>
            <p class="f-m-light mt-1">Click on the authentication button below and scan the QR code</p><img
                src="/images/forms/qr-scan.png" alt="qr-scan">
        </div>
        <ThemeFormFormlayoutTwofactorAuthenticationModel />
        <a class="btn btn-primary mt-5" data-bs-toggle="modal" href="#exampleModalToggle" role="button">2 factor
            authentication</a>
    </CommonCard3>
</template>
