<template>
    <CommonCard1 colClass="col-xl-4" cardClass="title-line" :headerTop="false" headerClass="" title="My Profile">
        <form>
            <div class="row g-3">
                <div class="col-12">
                    <div class="profile-title"> <img class="img-70 rounded-circle" alt="" src="/images/user/7.jpg">
                        <div class="flex-grow-1">
                            <h3 class="mb-1 f-w-600">MARK JECNO</h3>
                            <p>DESIGNER</p>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <h4 class="form-label">Bio</h4>
                    <textarea class="form-control"
                        rows="5">UI/UX Designer | Passionate about Creating Seamless User Experiences.</textarea>
                </div>
                <div class="col-12">
                    <label class="form-label">Email Address</label>
                    <input class="form-control" type="email" placeholder="your-email@domain.com">
                </div>
                <div class="col-12">
                    <label class="form-label">Password</label>
                    <input class="form-control" type="password" value="password">
                </div>
                <div class="col-12">
                    <label class="form-label">Website</label>
                    <input class="form-control" type="url" placeholder="https://themeforest.net/user/pixelstrap/portfolio">
                </div>
                <div class="form-footer">
                    <button class="btn btn-primary btn-block">Save</button>
                </div>
            </div>
        </form>
    </CommonCard1>
    <ThemeUserEditProfile />
    <ThemeUserEditTable />
</template>

<script setup lang="ts">
let password = ref('password')
</script>

