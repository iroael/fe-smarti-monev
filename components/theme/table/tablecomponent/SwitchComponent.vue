<template>
    <CommonCard3 colClass="col-sm-12" table="true" headerTitle="true" title="Switch">
        <div>
            <div class="card-block row">
                <div class="col-sm-12 col-lg-12 col-xl-12">
                    <div class="table-responsive theme-scrollbar">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td class="pills-component">Default Switch</td>
                                    <td class="w-50">
                                        <label class="switch">
                                            <input type="checkbox" checked><span class="switch-state"></span>
                                        </label>
                                    </td>
                                    <td><span>Use class <code>switch</code> for label.</span></td>
                                </tr>
                                <tr>
                                    <td>Disable Switch</td>
                                    <td class="w-50">
                                        <label class="switch">
                                            <input type="checkbox" disabled><span class="switch-state"></span>
                                        </label>
                                    </td>
                                    <td><span>this Disable Switch <code>disabled</code></span></td>
                                </tr>
                                <tr>
                                    <td>Switch Color</td>
                                    <td class="w-50">
                                        <div class="flex-grow-1 icon-state">
                                            <label class="switch">
                                                <input type="checkbox" checked><span class="switch-state bg-primary"></span>
                                            </label>
                                        </div>
                                    </td>
                                    <td><span>Use class
                                            <code>bg-*</code><code>Primary , Secondary , Success , Info , Warning , Danger</code>in
                                            span with icon show switch <code>icon-state</code>on div.</span></td>
                                </tr>
                                <tr>
                                    <td>Switch Outline</td>
                                    <td class="w-50">
                                        <div class="flex-grow-1 icon-state switch-outline">
                                            <label class="switch">
                                                <input type="checkbox" checked><span class="switch-state bg-primary"></span>
                                            </label>
                                        </div>
                                    </td>
                                    <td><span>Use class <code>switch-outline </code>on div.</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>