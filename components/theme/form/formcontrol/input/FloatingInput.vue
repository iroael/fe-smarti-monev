<template>
    <div class="col-xl-6">
        <div class="card height-equal">
            <div class="card-header">
                <h2>Basic floating input control</h2>
                <p class="f-m-light mt-1">
                    Give textual form controls like <code>&lt;input&gt;</code>s and <code>&lt;textarea&gt;</code>s an
                    upgrade with custom styles, sizing, focus states, and more.</p>
            </div>
            <form class="form theme-form">
                <div class="card-body custom-input">
                    <div class="row">
                        <div class="col">
                            <div class="mb-3 row">
                                <label class="col-sm-3">Valid input </label>
                                <div class="col-sm-9">
                                    <div class="form-floating">
                                        <input class="form-control" id="floatingInputValue" type="email"
                                            placeholder="name@example.com" value="test@example.com">
                                        <label for="floatingInputValue">Input with value</label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label class="col-sm-3">Invalid input </label>
                                <div class="col-sm-9">
                                    <div class="form-floating">
                                        <input class="form-control is-invalid" id="floatingInputInvalid" type="email"
                                            placeholder="name@example.com" value="test@example.com">
                                        <label for="floatingInputInvalid">Invalid input</label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label class="col-sm-3">Comments</label>
                                <div class="col-sm-9">
                                    <div class="form-floating">
                                        <textarea class="form-control" id="floatingTextarea"
                                            placeholder="Leave a comment here"></textarea>
                                        <label for="floatingTextarea">Comments</label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label class="col-sm-3">Email</label>
                                <div class="col-sm-9">
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="floatingInput" type="email">
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label class="col-sm-3">Password</label>
                                <div class="col-sm-9">
                                    <div class="form-floating">
                                        <input class="form-control" id="floatingPassword1" type="password">
                                        <label for="floatingPassword1">Password</label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label class="col-sm-3">Comments</label>
                                <div class="col-sm-9">
                                    <div class="form-floating">
                                        <textarea class="form-control" id="floatingTextarea2"
                                            placeholder="Leave a comment here" style="height: 100px"></textarea>
                                        <label for="floatingTextarea2">Comments</label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label class="col-sm-3">Open this select menu </label>
                                <div class="col-sm-9">
                                    <div class="form-floating">
                                        <select class="form-select" id="floatingSelect"
                                            aria-label="Floating label select example">
                                            <option selected>Open this select menu</option>
                                            <option v-for="(item, index) in rome" :key="index">{{ item }} </option>
                                        </select>
                                        <label for="floatingSelect">Works with selects</label>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label class="col-sm-3">Input group</label>
                                <div class="col-sm-9">
                                    <div class="input-group mb-3"><span class="input-group-text">@</span>
                                        <div class="form-floating">
                                            <input class="form-control" id="floatingInputGroup1" type="text">
                                            <label for="floatingInputGroup1">Username</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label class="col-sm-3">Input group</label>
                                <div class="col-sm-9">
                                    <div class="input-group has-validation"><span class="input-group-text">@</span>
                                        <div class="form-floating is-invalid">
                                            <input class="form-control is-invalid" id="floatingInputGroup2" type="text"
                                                required>
                                            <label for="floatingInputGroup2">Username</label>
                                        </div>
                                        <div class="invalid-feedback">Please choose a username.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-0 row">
                                <label class="col-sm-3">Layout</label>
                                <div class="col-sm-9">
                                    <div class="row g-2">
                                        <div class="col-xxl-6">
                                            <div class="form-floating">
                                                <input class="form-control" id="floatingInputGrid" type="email"
                                                    placeholder="name@example.com" value="mdo@example.com">
                                                <label for="floatingInputGrid">Email address</label>
                                            </div>
                                        </div>
                                        <div class="col-xxl-6">
                                            <div class="form-floating">
                                                <select class="form-select" id="floatingSelectGrid">
                                                    <option selected>Open this select menu</option>
                                                    <option v-for="(item, index) in menu" :key="index">{{ item }}</option>

                                                </select>
                                                <label for="floatingSelectGrid">Works with selects</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <div class="col-sm-9 offset-sm-3">
                        <button class="btn btn-primary me-3" type="submit">Submit</button>
                        <input class="btn btn-light" type="reset" value="Cancel">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" setup>
let menu = ref<string[]>(["One", "Two", "Three"])
let rome = ref<string[]>(["I", "II", "III"])
</script>