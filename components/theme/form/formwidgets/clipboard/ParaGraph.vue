<template>
    <CommonCard3 colClass="col-sm-12 col-md-6" cardClass="title-line height-equal" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Clipboard on paragraph">
        <div class="clipboaard-container">
            <p class="f-16">Copy from paragraph</p>
            <h6 class="border rounded card-body f-w-300" v-text="paragraph" id="clipboardExample3">

            </h6>
            <div class="mt-3 text-end">
                <button class="btn btn-primary btn-clipboard" @click="copyParagraphInput('clipboardExample3')" type="button"
                    data-clipboard-action="copy" data-clipboard-target="#clipboardExample3"><i class="fa fa-copy"></i>
                    Copy</button>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let paragraph = ref<string>(" On that day, hopes and dreams were crushed. Even though it should have been anticipated, it nonetheless surprised me. The warning indicators have been disregarded in favour of the slim chance that it would actually occur. From a hopeful prospect, it had evolved into an unquestionable conviction that it must be fate. That was up until it wasn't, at which point all of the aspirations and dreams collapsed.")
function copyParagraphInput(elementId: string) {
    var aux = document.createElement('input');
    aux.setAttribute('value', document.getElementById(elementId)?.innerHTML || '');
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
    alert('copied');
}
</script>