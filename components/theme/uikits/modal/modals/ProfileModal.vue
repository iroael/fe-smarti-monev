<template>
    <div class="col-xl-4 col-md-6 custom-alert text-center">
        <div class="card-wrapper border rounded-3 h-100">
            <div class="yuri-demo-img">
                <ul class="dot-group pb-3 pt-0">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="title-wrapper pb-3 modal-heading">
                    <h5 class="theme-name mb-0"><span>Modal 1 -</span>Profile Modal</h5>
                    <p>Example of Yuri dashboard profile card.</p>
                </div>
                <div class="overflow-hidden"><img class="img-fluid" src="/images/modal/social.png" alt="social">
                    <button class="btn btn-primary mx-auto mt-3" type="button" data-bs-toggle="modal"
                        data-bs-target="#exampleModallaptop1">Click Out</button>
                </div>
                <div class="modal fade" id="exampleModallaptop1" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModallaptop1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="col-xl-12">
                                <div class="card social-profile mb-0">
                                    <div class="card-body">
                                        <div class="social-img-wrap">
                                            <div class="social-img"><img src="/images/avtar/1.jpg" alt="profile">
                                            </div>
                                            <div class="edit-icon">
                                                <svg>
                                                    <use href="/svg/icon-sprite.svg#profile-check"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="social-details">
                                            <h3 class="mb-1 f-w-600"><nuxt-link to="/user/profile">Brooklyn
                                                    Simmons</nuxt-link>
                                            </h3>
                                            <span class="f-light">@brookly.simmons</span>
                                            <ul class="social-follow">
                                                <li>
                                                    <h3 class="mb-0 f-w-600">1,908</h3><span class="f-light">Posts</span>
                                                </li>
                                                <li>
                                                    <h3 class="mb-0 f-w-600">34.0k</h3><span
                                                        class="f-light">Followers</span>
                                                </li>
                                                <li>
                                                    <h3 class="mb-0 f-w-600">897</h3><span class="f-light">Following</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>