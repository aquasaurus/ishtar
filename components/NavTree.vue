<template>
  <div class="p-4 flex flex-row items-center space-x-4">
    <div v-for = 'item in items' :key = "item.key" class="flex flex-row items-center space-x-4">
      <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
      <span class="font-semibold">&#62;</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["items"]);
</script>
