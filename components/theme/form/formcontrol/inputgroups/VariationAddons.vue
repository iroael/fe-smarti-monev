<template>
    <div class="col-xl-6">
        <div class="card">
            <div class="card-header">
                <h2>Variation of addons</h2>
                <p class="f-m-light mt-1">
                    Place one add-on or button on either side of an input. You may also place one on both sides of an input.
                    Remember to place <code>&lt;label&gt;</code>s outside the input group.</p>
            </div>
            <div class="card-body card-wrapper input-radius">
                <div class="row">
                    <div class="col">
                        <form>
                            <div class="mb-3 m-form__group">
                                <label class="form-label">Left Addon</label>
                                <div class="input-group"><span class="input-group-text list-light-primary"><i
                                            class="icofont icofont-pencil-alt-5 txt-primary"></i></span>
                                    <input class="form-control" type="text" placeholder="Email">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Right Addon</label>
                                <div class="input-group">
                                    <input class="form-control" type="text" placeholder="Recipient's username"
                                        aria-label="Recipient's username"><span
                                        class="input-group-text list-light-warning"><i
                                            class="icofont icofont-ui-dial-phone txt-warning"> </i></span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Joint Addon</label>
                                <div class="input-group"><span class="input-group-text list-light-primary"><i
                                            class="icofont icofont-unlink txt-primary"></i></span><span
                                        class="input-group-text">0.00 </span>
                                    <input class="form-control" type="text" aria-label="Amount (to the nearest dollar)">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Left & Right Addon</label>
                                <div class="input-group mb-3"><span class="input-group-text list-light-warning"><i
                                            class="icofont icofont-ui-zoom-out txt-warning"></i></span>
                                    <input class="form-control" type="text"
                                        aria-label="Amount (to the nearest dollar)"><span
                                        class="input-group-text list-light-warning"><i
                                            class="icofont icofont-ui-zoom-in txt-warning"></i></span>
                                </div>
                            </div>
                            <div class="mb-3 input-group-dashed">
                                <label class="form-label">dashed style</label>
                                <div class="input-group"><span class="input-group-text list-light-primary"><i
                                            class="icofont icofont-users txt-primary"></i></span>
                                    <input class="form-control" type="text" placeholder="999999">
                                </div>
                            </div>
                            <div class="mb-3 input-group-square">
                                <label class="form-label">Flat style</label>
                                <div class="input-group"><span class="input-group-text list-light-warning"><i
                                            class="icofont icofont-credit-card txt-warning"></i></span>
                                    <input class="form-control" type="text" placeholder="">
                                </div>
                            </div>
                            <div class="mb-3 input-group-square">
                                <label class="form-label">Raise style</label>
                                <div class="input-group"><span class="input-group-text list-light-primary"><i
                                            class="icofont icofont-download txt-primary"></i></span>
                                    <input class="form-control input-group-air" type="text"
                                        placeholder="https://www.example.com">
                                </div>
                            </div>
                            <div>
                                <label class="form-label">Left & Right Addon</label>
                                <div class="input-group pill-input-group"><span
                                        class="input-group-text list-light-warning"><i
                                            class="icofont icofont-ui-copy txt-warning"></i></span>
                                    <input class="form-control" type="text"
                                        aria-label="Amount (to the nearest dollar)"><span
                                        class="input-group-text list-light-warning"><i
                                            class="icofont icofont-stock-search txt-warning"></i></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-primary m-r-15" type="submit">Submit</button>
                <button class="btn btn-light" type="submit">Cancel </button>
            </div>
        </div>
    </div>
</template>