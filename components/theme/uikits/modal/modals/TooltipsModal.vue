<template>
    <div class="modal fade" id="tooltipmodal" tabindex="-1" role="dialog" aria-labelledby="tooltipmodal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Tooltip and popover modal</h5>
                    <button class="btn-close py-0" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h5>Popover in a modal</h5>
                    <p class="mt-2">This <a class="btn btn-success popover-test" href="#" role="button"
                            title="this is amazing content" data-bs-toggle="popover">button</a> triggers a
                        popover on click.</p>
                    <hr>
                    <h5>Tooltips in a modal</h5>
                    <p class="mt-2"><a class="tooltip-test text-info" href="#" title="Tooltip" data-bs-toggle="tooltip">This
                            link</a> and <a class="tooltip-test text-info" href="#" title="Tooltip"
                            data-bs-toggle="tooltip">that link</a> have tooltips on
                        hover.</p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-primary" type="button">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>