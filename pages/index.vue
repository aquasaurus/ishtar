<template>
  <div class="py-2">
    <div class="py-4 flex flex-col items-center text-center">
      <div class="text-4xl font-bold">
        {{ locations.name }}
      </div>
      <div class="text-lg">{{ locations.description }}</div>
    </div>
    <ListItems :locations="locations" prefix = "/" />
  </div>
</template>

<script setup>
import locations from "@/data/Map.js";
</script>