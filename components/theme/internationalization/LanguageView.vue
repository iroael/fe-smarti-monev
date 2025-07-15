<template>
    <CommonCard3 colClass="col-lg-12" cardClass="title-line" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="How to add language" :desc="desc" text="true">
        <pre
            class="custom-scrollbar language px-4"><span class="font-danger">var </span>LANGUAGES = {<br>"English": {<br>"columns": [<br>"Base",<br>"Advance",<br>"scrollable",<br>"Tree View",<br>"Rating",<br>"News",<br>"Tables",<br>"Base",<br>"Advance",<br>"scrollable",<br>"Tree View",<br>"Rating",<br>"News",<br>"Tables"<br>],<br>"heading": "Static Sub Nav",<br>},<br>"German": {<br>"columns": [<br>"Basis",<br>"Fortschritt",<br>"scrollable",<br>"Baumansicht",<br>"Die Einschaltquote",<br>"Nachrichten",<br>"Tische",<br>"Basis",<br>"Fortschritt",<br>"scrollable",<br>"Baumansicht",<br>"Die Einschaltquote",<br>"Nachrichten",<br>"Tische"<br>],<br>"heading": "Statisches U-Boot Nav",<br>},<br>"Russian": {<br>"columns": [<br>"Основа",<br>"Прогресс",<br>"прокручиваемый",<br>"Представление Дерева",<br>"Оценка",<br>"новости",<br>"Столы",<br>"Основа",<br>"Прогресс",<br>"прокручиваемый",<br>"Представление Дерева",<br>"Оценка",<br>"новости",<br>"Столы"<br>],<br>"heading": "Статический Sub Военно - морской",<br>},<br>"Arabic": {<br>"columns": [<br>"قاعدة",<br>"مقدما",<br>"التمرير",<br>"عرض الشجرة",<br>"تصنيف",<br>"أخبار",<br>"الجداول",<br>"قاعدة",<br>"مقدما",<br>"التمرير",<br>"عرض الشجرة",<br>"تصنيف",<br>"أخبار",<br>"الجداول"<br>],<br>"heading": "صافي قيمة الأصول شبه الثابتة",<br>}<br>};</pre>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("you can also add other language according to below in js and add lanuage type in langChoice")
</script>