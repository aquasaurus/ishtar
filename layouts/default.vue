<template>
  <div
    class="
      min-h-screen
      flex flex-col
      items-center
      bg-white
      dark:bg-gray-900
      text-black
      dark:text-white
      tracking-wide
      leading-6
    "
  >
    <main class="flex-1 max-w-7xl mt-12 p-2">
      <Search />
      <div class="py-2" @focus="doThemFromScratch">
        <NavTree :path="$route.fullPath" :items="items" />
      </div>
      <slot />
    </main>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
<script setup>
import locations from "@/data/Map.js";

const nuxtApp = useNuxtApp();
const route = useRoute();
useHead({
  title: "Some title",
});

let items = ref([]);
function doThemFromScratch() {
  items.value = []
if (route.params.level_one)
  items.value.push({
    name: `${
      locations.items.find((x) => x.key === route.params.level_one)?.name
    }`,
    key: route.params.level_one,
    url: `/${route.params.level_one}/`,
  });

if (route.params.level_two)
  items.value.push({
    name: `${
      locations.items
        .find((x) => x.key === route.params.level_one)
        ?.items?.find((x) => x.key === route.params.level_two)?.name
    }`,
    key: route.params.level_two,
    url: `/${route.params.level_one}/${route.params.level_two}/`,
  });

if (route.params.level_three)
  items.value.push({
    name: `${
      locations.items
        .find((x) => x.key === route.params.level_one)
        ?.items?.find((x) => x.key === route.params.level_two)
        ?.items?.find((x) => x.key === route.params.level_three)?.name
    }`,
    key: route.params.level_three,
    url: `/${route.params.level_one}/${route.params.level_two}/${route.params.level_three}/`,
  });
}
doThemFromScratch()
watch(() => route.params, doThemFromScratch)

</script>