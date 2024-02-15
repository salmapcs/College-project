<template>
<div >
    <div class="text-green-6 text-uppercase text-bold" style="font-size:18px;">{{ title }}</div>
    <div class="text-h3">{{ heading }}</div>
    <div>{{ subheading }}</div>
    <slot><q-input label="Search"/> </slot>
    <div>rhyntunjuytn</div>
</div>
</template>
<script>
export default{
    props: [
        'title',
        'heading',
        'subheading',

    ]
}
</script>

