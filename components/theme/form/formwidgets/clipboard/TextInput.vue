<template>
    <CommonCard3 colClass="col-sm-12 col-md-6" headerTitle="true" cardClass="title-line" title="Clipboard on text input">
        <div class="clipboaard-container">
            <p class="f-16">Cut/copy from text input</p>
            <input class="form-control" id="clipboardExample1" v-model="textInput" type="text"
                placeholder="type some text to copy / cut">
            <div class="mt-3 text-end">
                <button class="btn btn-primary btn-clipboard mx-1" type="button" data-clipboard-action="copy"
                    data-clipboard-target="#clipboardExample1" @click="copyTextInput"><i class="fa fa-copy"></i>
                    Copy</button>
                <button class="btn btn-secondary btn-clipboard-cut" type="button" data-clipboard-action="cut"
                    data-clipboard-target="#clipboardExample1" @click="cut"><i class="fa fa-cut"></i> Cut</button>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let textInput = ref<string>('')
function copyTextInput() {
    navigator.clipboard.writeText(textInput.value);
    alert('copied');
}
function cut() {
    navigator.clipboard.writeText(textInput.value);
    textInput.value = '';
    alert('cut');
}
</script>