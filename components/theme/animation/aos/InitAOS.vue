<template>
    <CommonCard3 headerTitle="true" title="Init AOS">
        <div><span class="comment">// The Below Function is example of how to initlize reveal</span>
            <div class="line"><span></span> &lt;script&gt; <span></span><br><code>  AOS.init();</code><br><span> &lt;</span>
                /script <span> &gt; </span></div>
        </div>
    </CommonCard3>


    <CommonCard3 text="true" headerTitle="true" title="How to use it?" pre="true" preClass="f-m-light mt-1" :desc="desc">
        <div class="txt-primary"><span> &lt;</span> div data-aos="animation_name" <span> &gt; </span>
        </div>
    </CommonCard3>

    <CommonCard3 text="true" headerTitle="true" cardbodyClass="table-responsive" pre="true" preClass="f-m-light mt-1"
        title=" Advanced settings" :desc="desc1">
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Description</th>
                    <th>Example value</th>
                    <th>Default value</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in init" :key="index">
                    <td v-html="item.attr"></td>
                    <td>{{ item.desc }}</td>
                    <td>{{ item.example }}</td>
                    <td>{{ item.default }}</td>
                </tr>

            </tbody>
        </table>
    </CommonCard3>

    <CommonCard3 text="true" headerTitle="true" cardbodyClass="table-responsive" pre="true" preClass="f-m-light mt-1"
        title="Animation" :desc="desc2">
        <ul class="line">
            <li v-for="(item, index) in animation" :key="index">
                <h2>{{ item.title }}</h2>
                <ol class="ps-4 mb-4 ">
                    <li v-for="(items, index) in item.children" :key="index">{{ items.title }}</li>

                </ol>
            </li>
        </ul>
    </CommonCard3>

    <CommonCard3 headerTitle="true" title=" Anchor placement">
        <ol class="ps-4  line">
            <li v-for="(item, index) in anchor" :key="index">{{ item }}</li>

        </ol>
    </CommonCard3>


    <CommonCard3 headerTitle="true" title="Easing functions:">
        <ol class="ps-4  line">
            <li v-for="(item, index) in easing" :key="index">{{ item }}</li>

        </ol>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { init, animation, anchor, easing } from "~/core/data/masonry"
let desc = ref<string>("All you have to do is to add <code>data-aos</code> attribute to html element, like so:")
let desc1 = ref<string>("These settings can be set both on certain elements, or as default while initializing script (in options object without <code> data- part).</code>")
let desc2 = ref<string>("There are serveral predefined animations you can use already:")
</script>