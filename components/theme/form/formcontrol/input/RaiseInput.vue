<template>
    <div class="col-md-6">
        <div class="card">
            <div class="card-header">
                <h2>Raise input style</h2>
                <p class="f-m-light mt-1">
                    Use the <code>input-air-* </code>through defined bottom box-shadow.</p>
            </div>
            <form class="form theme-form dark-inputs">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label class="form-label" for="exampleFormControlInput15">Email address</label>
                                <input class="form-control input-air-primary" id="exampleFormControlInput15" type="email"
                                    placeholder="name@example.com">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label class="form-label" for="exampleInputPassword16">Password</label>
                                <input class="form-control input-air-primary" id="exampleInputPassword16" type="password"
                                    placeholder="Password">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label class="form-label" for="exampleFormControlSelect17">Select your favorite pixelstrap
                                    theme</label>
                                <select class="form-select input-air-primary digits" id="exampleFormControlSelect17">
                                    <option v-for="(item, index) in theme" :key="index">{{ item }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label class="form-label" for="exampleFormControlSelect18">Select the color you like
                                    below</label>
                                <select class="form-select input-air-primary digits" id="exampleFormControlSelect18"
                                    multiple>
                                    <option class="rounded-0" v-for="(item, index) in color" :key="index">{{ item }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div>
                                <label class="form-label" for="exampleFormControlTextarea19">Comments</label>
                                <textarea class="form-control input-air-primary" id="exampleFormControlTextarea19"
                                    rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary me-3" type="submit">Submit</button>
                    <input class="btn btn-light" type="reset" value="Cancel">
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" setup>
let color = ref<string[]>(["Red", "Yellow", "Orange", "White", "Black", "Gray", "Brown", "Purple", "White"])
let theme = ref<string[]>(["Tivo", "Roxo", "Wingo", "Lagos", "Koho"])
</script>