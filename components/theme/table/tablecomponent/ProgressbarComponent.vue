<template>
    <CommonCard3 colClass="col-sm-12" table="true" headerTitle="true" title="Progressbar">
        <div>
            <div class="card-block row">
                <div class="col-sm-12 col-lg-12 col-xl-12">
                    <div class="table-responsive theme-scrollbar">
                        <table class="table table-bordered checkbox-td-width">
                            <tbody>
                                <tr>
                                    <td>Default Progress</td>
                                    <td class="w-50">
                                        <div class="progress">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td><span>Uses a progress bar with class<code>progress-bar</code> and background
                                            color<code> bg-primary, bg-secondary </code>also change</span></td>
                                </tr>
                                <tr>
                                    <td>Striped Progress </td>
                                    <td>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar"
                                                style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </td>
                                    <td><span>Uses a gradient to create a striped effect
                                            class.<code> progress-bar-striped</code></span></td>
                                </tr>
                                <tr>
                                    <td>Progress Sizes</td>
                                    <td>
                                        <div class="progress lg-progress-bar">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 75%"
                                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td><span>Different sized progress. For Default progress, class
                                            need<code> lg-progress-bar </code>on div.</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>