<template>
    <CommonCard3 colClass="col-sm-12 col-md-6" cardClass="title-line height-equal" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Copy portion from paragraph">
        <div class="clipboaard-container">
            <p class="f-16">Copy portion from paragraph</p>
            <h6 class="border rounded card-body f-w-300"><span class="bg-primary text-white p-1"
                    id="highlighted_paragraph">Web design is the process of creating websites </span>that are
                visible online. Take a website design course to learn how to
                create an appealing and responsive website. In the discipline of web design,
                there are degree, diploma, postgraduate degree, and certificate programmes.
                A web designer is responsible for a website's look, feel, and occasionally even content.
            </h6>
            <div class="mt-3 text-end">
                <button class="btn btn-success btn-clipboard"
                    @click="copyHighlightedParagraphInput('highlighted_paragraph')" type="button"
                    data-clipboard-action="copy" data-clipboard-target="#clipboardExample4"><i class="fa fa-copy"></i> Copy
                    highlighted text</button>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
function copyHighlightedParagraphInput(elementId: any) {

    var aux = document.createElement('input');
    aux.setAttribute('value', document.getElementById(elementId)?.innerHTML || '');
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
    alert('copied');
}
</script>