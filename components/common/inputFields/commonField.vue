<template>
    <input :class="classes" :type="type" :placeholder="placeholder" :value="modelValue?.data ? modelValue?.data : value"
        @input="update($event.target.value)" :multiple="multiple" :disabled="disabled" :maxlength="maxlength"
        :required="required" :name="name">
    <p v-if="modelValue?.errorMessage && errorMsg" class="text-danger">{{ modelValue?.errorMessage }}</p>
</template>

<script setup lang="ts">
import {useAppStore} from '~/stores/app'
let store = useAppStore();
let  props = defineProps({
    classes:[String , Array],
    type:String,
    placeholder:String,
    modelValue:Object,
    errorMessage:String,
    value:String,
    errorMsg:Boolean,
    name:String,
    multiple:{
        default:false,
        type:Boolean
    },
    disabled:{
        default:false,
        type:Boolean
    },
     required:{
        default:false,
        type:Boolean
    },
    maxlength:String
})
let emit = defineEmits(['update:modelValue'])
watch(() => store.formSubmited, () => { store.formSubmited && update(props.modelValue?.data) })
function update(value:string){
    
    if(value != ''){       
        emit('update:modelValue',{data:value,errorMessage:''})
    }    
    else{
        emit('update:modelValue',{data:value,errorMessage:props.errorMessage})
    }
}
</script>

