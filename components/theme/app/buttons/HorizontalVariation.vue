<template>
    <div class="col-md-6 horizontal-variation">
        <div class="row g-3">
            <div class="col-12">
                <div class="card-wrapper border rounded-3 h-100">
                    <h6 class="sub-title fw-bold">Horizontal variation</h6>
                    <div class="button-wrapper button-box">
                        <div class="btn-group" role="group" aria-label="Default button group">
                            <button class="btn btn-outline-primary" type="button">How</button>
                            <button class="btn btn-outline-primary" type="button">Are</button>
                            <button class="btn btn-outline-primary" type="button">You?</button>
                        </div>
                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button class="btn btn-primary" type="button">Y</button>
                            <button class="btn btn-secondary" type="button">U</button>
                            <button class="btn btn-warning" type="button">R</button>
                            <button class="btn btn-success" type="button">I</button>
                            <div class="btn-group" role="group">
                                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">Pages</button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Gallery</a></li>
                                    <li><a class="dropdown-item" href="#">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="btn-group select-checkbox" role="group" aria-label="Basic checkbox toggle button group">
                            <input class="btn-check" id="btncheck1" type="checkbox" />
                            <label class="btn btn-outline-success mb-0" for="btncheck1">Checkbox 1</label>
                            <input class="btn-check" id="btncheck2" type="checkbox" />
                            <label class="btn btn-outline-primary mb-0" for="btncheck2">Checkbox 2</label>
                            <input class="btn-check" id="btncheck3" type="checkbox" />
                            <label class="btn btn-outline-success mb-0" for="btncheck3">Checkbox 3</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card-wrapper border rounded-3 h-100">
                    <h6 class="sub-title fw-bold">Button toolbar</h6>
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group" role="group" aria-label="First group">
                            <button class="btn btn-primary" type="button">I</button>
                            <button class="btn btn-secondary" type="button">II</button>
                            <button class="btn btn-success" type="button">III</button>
                            <button class="btn btn-info" type="button">IV</button>
                        </div>
                        <div class="btn-group" role="group" aria-label="Second group">
                            <button class="btn btn-warning" type="button">V</button>
                            <button class="btn btn-danger" type="button">VI</button>
                            <button class="btn btn-primary" type="button">VII</button>
                        </div>
                        <div class="btn-group" role="group" aria-label="Third group">
                            <button class="btn btn-light" type="button">VIII</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>