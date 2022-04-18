<template>
  <div class="py-2">
    <div class="py-4 flex flex-col items-center text-center">
      <div class="text-4xl font-bold">
        {{ myLocations.name }}
      </div>
      <div class="text-lg">{{ myLocations.description }}</div>
    </div>
    <ListItems :locations="myLocations" :prefix = "`/${$route.params.level_one}/`" />
  </div>
</template>

<script setup>
import locations from "@/data/Map.js";

const route = useRoute()

const myLocations = locations.items.find(x => x.key === route.params.level_one)

</script>
