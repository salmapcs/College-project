<template>
    <q-layout view="lHh Lpr lFf">
    <q-header class="bg-teal-5 text-grey-10">
        <div class="row justify-center items-center">
            <div class="q-py-lg text-h4" style="font-weight: bold; color: white;">
                Student Registration Form
            </div>
        </div>
    </q-header>

    <q-page-container>
        <RouterView />
    </q-page-container>
</q-layout>

  </template>

<script>
export default {
 name: 'IndexPage'
}

</script>
  