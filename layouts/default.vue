<template>
  <div class="min-h-screen flex flex-col items-center bg-white dark:bg-gray-900 text-black dark:text-white tracking-wide leading-6">
    <main class="flex-1 max-w-7xl mt-12 p-2">
      <slot />
    </main>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
<script setup>
const nuxtApp = useNuxtApp();
const route = useRoute();
useHead({
  title: "Some title",
});
</script>