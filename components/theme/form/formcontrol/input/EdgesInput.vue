<template>
    <div class="col-md-6">
        <div class="card">
            <div class="card-header">
                <h2>Edges input style</h2>
                <p class="f-m-light mt-1">
                    Use the <code>.btn-pill </code>through defined border-radius.</p>
            </div>
            <form class="form theme-form dark-inputs">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label class="form-label" for="exampleFormControlInput5">Email address</label>
                                <input class="form-control btn-pill" id="exampleFormControlInput5" type="email"
                                    placeholder="name@example.com">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label class="form-label" for="exampleInputPassword6">Password</label>
                                <input class="form-control btn-pill" id="exampleInputPassword6" type="password"
                                    placeholder="Password">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label class="form-label" for="exampleFormControlSelect7">Select your favorite pixelstrap
                                    theme</label>
                                <select class="form-select btn-pill digits" id="exampleFormControlSelect7">
                                    <option v-for="(item, index) in theme" :key="index">{{ item }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label class="form-label" for="formFileSimple">Default file input example</label>
                                <input class="form-control btn-pill px-4" id="formFileSimple" type="file">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label class="form-label">Default Input</label>
                                <input class="form-control btn-pill" type="text" placeholder="Default input"
                                    aria-label="default input example">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="mb-3 d-flex gap-3 checkbox-checked">
                                <div class="form-check">
                                    <input class="form-check-input" id="flexRadioDefault1" type="radio"
                                        name="flexRadioDefault">
                                    <label class="form-check-label mb-0" for="flexRadioDefault1">Male </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" id="flexRadioDefault2" type="radio"
                                        name="flexRadioDefault" checked>
                                    <label class="form-check-label mb-0" for="flexRadioDefault2">Female</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div>
                                <label class="form-label" for="exampleFormControlTextarea9">Comments</label>
                                <textarea class="form-control btn-pill" id="exampleFormControlTextarea9"
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
let theme = ref<string[]>(["Tivo", "Lagos", "Roxo", "Oslo", "Voxox", "Sheltos", "Petkart", "Zeta"])
</script>