<template>
    <CommonCard3 colClass="col-sm-12" card-class="table-component" table="true" headerTitle="true" title="Alerts">
        <div>
            <div class="card-block row">
                <div class="col-sm-12 col-lg-12 col-xl-12">
                    <div class="table-responsive theme-scrollbar">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Basic Alert</td>
                                    <td class="w-50">
                                        <div class="alert alert-primary">
                                            <p><strong>Success!</strong> Indicates a successful or positive action.</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p><span>Alerts are available for any length of text, as well as an optional
                                                dismiss button. Add
                                                <code> alert alert-primary</code>,<code> alert alert-secondary</code>,<code> alert alert-success</code>,<code> alert alert-info</code>
                                                classes for alert with all theme colors.</span></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Alerts with Links</td>
                                    <td>
                                        <div class="alert alert-primary">
                                            <p><strong>Success!</strong> You should <a class="alert-link font-light"
                                                    href="#">read
                                                    this message</a>.</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p><span>Alerts are available for any length of text, as well as an optional
                                                dismiss button. Add
                                                <code> alert alert-primary</code>,<code> alert alert-secondary</code>,<code> alert alert-success</code>,<code> alert alert-info</code>
                                                classes for alert with all theme colors.</span></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dismissible Alerts</td>
                                    <td>
                                        <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                                            <p><strong>Holy !</strong> You can check in on some of those fields below.
                                            </p>
                                            <button class="btn-close" type="button" data-bs-dismiss="alert"
                                                aria-label="Close"></button>
                                        </div>
                                    </td>
                                    <td><span>Add a dismiss button and the<code> alert alert-dismissable </code>class,
                                            which adds extra padding to the right of the alert and positions
                                            the<code>close</code>a link On the dismiss button, add the
                                            data-bs-dismiss="alert" attribute, which triggers the JavaScript
                                            functionality. Be sure to use the<code>a</code>element with it for proper
                                            behavior across all devices. To animate alerts when dismissing them, be sure
                                            to add the .fade and .in classes.</span></td>
                                </tr>
                                <tr>
                                    <td>Alerts with icons</td>
                                    <td>
                                        <div class="alert alert-primary inverse alert-dismissible fade show" role="alert"><i
                                                class="icofont icofont-heart-alt"></i>
                                            <p>Good Morning! Start your day with some alerts.</p>
                                            <button class="btn-close" type="button" data-bs-dismiss="alert"
                                                aria-label="Close"></button>
                                        </div>
                                    </td>
                                    <td><span>Add a dismiss button and the<code> alert alert-dismissable </code>class,
                                            which adds extra padding to the right of the alert and positions
                                            the<code>close</code>a link On the dismiss button, add the
                                            data-bs-dismiss="alert" attribute, which triggers the JavaScript
                                            functionality. Be sure to use the<code>a</code>element with it for proper
                                            behavior across all devices. To animate alerts when dismissing them, be sure
                                            to add the .fade and .in classes.</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>