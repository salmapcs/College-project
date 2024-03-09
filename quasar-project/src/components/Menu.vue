<template>

    <div class="row text-white">
        <q-btn-dropdown v-for="item of menu" :to="item.url" stretch flat :label="item.label">
            <q-list clickable separator>
                <q-item v-for="subMenuItem of item.subMenu" clickable>
                    <q-item-section>{{ subMenuItem.label }}</q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>

    </div>



</template>

<script>
export default {
    props: ['menu']

}
</script>