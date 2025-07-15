<template>
    <CommonCard4 colClass="col-xl-3 col-md-6 box-col-3" topClass="header-top" cardClass="card title-line "
        cardhaderClass="card-no-border" meet="true" header="true" title="Daily Task"
        cardbodyClass="notification daily-task pt-0">
        <ul>
            <li class="d-flex align-items-center">
                <div class="activity-dot-primary"></div>
                <div class="task-content ms-2">
                    <div class="d-flex align-items-center">
                        <div>
                            <h6>iOS App UI/UX Meet..</h6><span class="f-light f-w-500 f-12">
                                <svg>
                                    <use href="/svg/icon-sprite.svg#clock-2"></use>
                                </svg><span>9:00 am</span></span>
                        </div>
                        <button class="btn btn-lighten-primary" type="button">Remind Me</button>
                    </div>
                </div>
            </li>
            <li class="d-flex align-items-center">
                <div class="activity-dot-warning"></div>
                <div class="task-content ms-2">
                    <div class="d-flex align-items-center">
                        <div>
                            <h6>Start Web developing..</h6><span class="f-light f-w-500 f-12">
                                <svg>
                                    <use href="/svg/icon-sprite.svg#clock-2"></use>
                                </svg><span>10:00 am</span></span>
                        </div>
                        <button class="btn btn-lighten-primary" type="button">Remind Me</button>
                    </div>
                </div>
            </li>
            <li class="d-flex align-items-center">
                <div class="activity-dot-success"></div>
                <div class="task-content ms-2">
                    <div class="d-flex align-items-center">
                        <div>
                            <h6>IOS App ui</h6><span class="f-light f-w-500 f-12">
                                <svg>
                                    <use href="/svg/icon-sprite.svg#clock-2"></use>
                                </svg><span>10:00 am</span></span>
                        </div>
                        <button class="btn btn-lighten-primary" type="button">Remind Me</button>
                    </div>
                </div>
            </li>
        </ul>
    </CommonCard4>
</template>

<script setup lang="ts">
let defaultValue = '<svg><use href="/svg/icon-sprite.svg#more-horizontal"></use></svg>'
</script>

