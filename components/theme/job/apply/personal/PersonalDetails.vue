<template>
    <div class="job-description">
        <h4 class="mb-0">Personal Details </h4>
        <form class="form theme-form">
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="exampleFormControlInput1">Full Name:<span
                                class="font-danger">*</span></label>
                        <input class="form-control" id="exampleFormControlInput1" type="text"
                            placeholder="Enter your full name">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="exampleFormControlInput3">Email:<span
                                class="font-danger">*</span></label>
                        <input class="form-control" id="exampleFormControlInput3" type="email" placeholder="Enter email">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="exampleFormControlpassword">Password:<span
                                class="font-danger">*</span></label>
                        <input class="form-control" id="exampleFormControlpassword" type="password"
                            placeholder="Enter password">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="exampleFormControlpassword1">Repeat Password:<span
                                class="font-danger">*</span></label>
                        <input class="form-control" id="exampleFormControlpassword1" type="password"
                            placeholder="Repeat password">
                    </div>
                </div>
            </div>
            <ThemeJobApplyPersonalBirthDate />

            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="exampleFormControlInput4">Phone Number:</label>
                        <input class="form-control" id="exampleFormControlInput4" type="number"
                            placeholder="Enter Phone no.">
                    </div>
                </div>
            </div>
        </form>
        <ThemeJobApplyPersonalYourEducation />
        <h6 class="mb-0">Upload Your Files</h6>
        <form class="form theme-form">
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="col-form-label pt-0">Upload Cover Letter:<span class="font-danger">*</span></label>
                        <input class="form-control" type="file">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="col-form-label pt-0">Upload Your CV:<span class="font-danger">*</span></label>
                        <input class="form-control" type="file">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div>
                        <label class="col-form-label pt-0">Upload Recommendations:</label>
                        <input class="form-control" type="file">
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>