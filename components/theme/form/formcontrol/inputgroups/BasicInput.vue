<template>
    <div class="col-xl-6">
        <div class="card">
            <div class="card-header">
                <h2>Basic input groups</h2>
                <p class="f-m-light mt-1">
                    Place one add-on or button on either side of an input. You may also place one on both sides of an input.
                    Remember to place <code>&lt;label&gt;</code>s outside the input group.</p>
            </div>
            <div class="card-body">
                <div class="row g-3">
                    <div class="col-md-12">
                        <div class="card-wrapper border rounded-3 main-custom-form input-group-wrapper">
                            <h6 class="sub-title fw-bold">Basic</h6>
                            <div class="input-group"><span class="input-group-text" id="basic-addon1">@</span>
                                <input class="form-control" type="text" placeholder="Username" aria-label="Username"
                                    aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Recipient's username"
                                    aria-label="Recipient's username" aria-describedby="basic-addon2"><span
                                    class="input-group-text" id="basic-addon2">@example.com</span>
                            </div>
                            <label class="form-label" for="basic-url">Your vanity URL</label>
                            <div class="input-group"><span class="input-group-text"
                                    id="basic-addon3">https://example.com/</span>
                                <input class="form-control" id="basic-url" type="text" aria-describedby="basic-addon3">
                            </div>
                            <div class="input-group"><span class="input-group-text">$</span>
                                <input class="form-control" type="text" aria-label="Amount (to the nearest dollar)"><span
                                    class="input-group-text">.00</span>
                            </div>
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Username" aria-label="Username"><span
                                    class="input-group-text">@</span>
                                <input class="form-control" type="text" placeholder="Server" aria-label="Server">
                            </div>
                            <div class="input-group"><span class="input-group-text">With textarea</span>
                                <textarea class="form-control" aria-label="With textarea"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card-wrapper border rounded-3 input-radius">
                            <h6 class="sub-title fw-bold">Wrapping </h6>
                            <p class="f-m-light mb-1">Input groups wrap by default via flex-wrap: wrap in order to
                                accommodate custom form field validation within an input group. You may disable this with
                                <code>.flex-nowrap</code>.
                            </p>
                            <div class="input-group flex-nowrap"><span class="input-group-text" id="addon-wrapping">@</span>
                                <input class="form-control" type="text" placeholder="Username" aria-label="Username"
                                    aria-describedby="addon-wrapping">
                            </div>
                        </div>
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