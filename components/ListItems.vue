<template>
        <div class="grid grid-cols-1 gap-4 mt-12 items-center">
      <NuxtLink
        v-for="location in props.locations.items"
        :key="location.key"
        :to="`${props.prefix}${location.key}`"
        class="
          bg-gray-700
          text-gray-200
          dark:bg-gray-200 dark:text-gray-900
          rounded-xl
          p-4
          transition
          duration-500
          ease-in-out
          transform
          hover:-translate-y-1
          w-full text-center
        "
      >
        <div class="text-4xl">{{ location.name }}</div>
      </NuxtLink>
    </div>
</template>
<script setup>
const props = defineProps(['locations', 'prefix'])
</script>
