<template>
    <div class="customizer-header"><i class="icofont-close icon-close" @click="closecustomizer()"></i>
        <h5 class="pt-0 mt-0">Preview Settings</h5>
        <p class="mb-0">Try It Real Time <i class="fa fa-thumbs-o-up txt-primary"></i></p>
        <button type="button" class="btn btn-primary plus-popup mt-2" data-bs-toggle="modal" data-bs-target="#configModal">
            Configuration
        </button>
        <teleport to='body'>
            <div class="modal fade" id="configModal" tabindex="-1" aria-labelledby="configModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="configModalLabel">Modal title</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-header modal-copy-header">
                            <h3 class="headerTitle mb-0">Customizer configuration</h3>
                        </div>
                        <div class="modal-body">
                            <div class="config-popup">
                                <p>
                                    To replace our design with your desired theme. Please do
                                    configuration as mention
                                </p>
                                <p>
                                    <b>Path : src > data > layout.json</b>
                                </p>
                                <div>
                                    <pre class="overflow-hidden">
                                                                                                            <code>
    settings:
           {
                "layout_type":'{{ layout.settings.layout_type }}',
                "layout":'{{ layout.settings.layout }}',
                "sidebar_setting": '{{ layout.settings.sidebar_setting }}'
            },
    color:
           {
                "layout_version":'{{ layout.color.layout_version }}',
                "primary_color":'{{ layout.color.primary_color }}',
                "secondary_color":'{{ layout.color.secondary_color }}'
            }
                                                    </code>
   </pre>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" @click="copy()">
                                Copy text
                            </button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </teleport>
    </div>
</template>
<script lang="ts" setup>
import { useSidebarStore } from '~/stores/sidebar'
import { uselayoutStore } from "~/stores/layout"
import { toast } from 'vue3-toastify';
let store = useSidebarStore()
let storeLayout = uselayoutStore()
let layout = storeLayout.layouts
function closecustomizer() {
    store.customizer = '';
}
function copy() {
    navigator.clipboard.writeText(JSON.stringify(storeLayout.layouts));
    toast.success('Code Copied to clipboard ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored', position: 'top-right',
    });
}
</script>