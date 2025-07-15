<template>
    <CommonCard3 colClass="col-xl-6" cardClass="height-equal title-line" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Hovering Timeline" :desc="desc">
        <ul class="square-timeline">
            <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-wrapper">
                    <p class="timeline-thumbnail">January 2024- Annual Function</p>
                    <h5>Location</h5><span class="text-muted">Largo Febo,10225012-Calvisano BS</span>
                    <p class="pt-3 mb-4">What a dynamic performance by the eighth-grade students, Let's welcome the
                        ninth-grade kid to the stage.</p>
                </div>
            </li>
            <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-wrapper">
                    <p class="timeline-thumbnail">March 2024 - Fresher Interview</p>
                    <h5>Ofwrrior Company</h5>
                    <div class="text-muted">A fresher's interview is to be
                        conducted

                        <div class="list-group main-lists-content"><a
                                class="list-group-item list-group-item-action border-0 p-0 mb-4" href="#"
                                aria-current="true">
                                <div class="d-flex w-100 justify-content-between align-items-center">
                                    <div class="list-wrapper"><img class="list-img img-fluid me-0 mb-0"
                                            src="/images/user/1.jpg" alt="profile">
                                        <div class="list-content">
                                            <h6>Molly Boake</h6>
                                            <p>MollyBoake@rhyta.com</p>
                                        </div>
                                    </div>
                                    <div class="timeline-icon"><i class="icon-facebook"></i><i class="icon-google">
                                        </i><i class="icon-twitter-alt"></i></div>
                                </div>
                                <p class="mb-1">Next step is to choose a tone of voice for your content type.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-wrapper">
                    <p class="timeline-thumbnail">December 2024 - Meetup</p>
                    <h5>US Meeting</h5>
                    <div class="text-muted">2209 Leverton Cove RoadSpringfield, MA 01109

                        <div class="designer-details">
                            <div class="designer-profile">
                                <div class="designer-wrap"><img class="designer-img img-fluid" src="/images/avtar/4.jpg"
                                        alt="profile">
                                    <div class="designer-content">
                                        <h6>Lillian J. Goodfellow</h6>
                                        <p>239-664-7751</p>
                                    </div>
                                </div>
                            </div>
                            <div class="designer-profile">
                                <div class="designer-wrap"><img class="designer-img img-fluid" src="/images/avtar/7.jpg"
                                        alt="profile">
                                    <div class="designer-content">
                                        <h6>Carolyn A. Sutton</h6>
                                        <p>218-793-6609</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Use the <code>.square-timeline</code> main class through create new variations of timeline.")
</script>