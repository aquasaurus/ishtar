<template>
  <div class="flex flex-row items-center space-x-2">
    <div class="py-2 relative w-full">
      <input
        v-model="username"
        placeholder="What are you looking for?"
        @input="toggleDrop"
        id="username"
        type="text"
        class="
          w-full
          rounded-xl
          h-12
          p-2
          bg-gray-900
          border border-gray-300
          text-center
        "
      />
      <div
        :class="`${
          dropOpen ? 'block' : 'hidden'
        } overflow-y-scroll max-h-64 absolute z-40 flex flex-col w-full bg-gray-700 p-2`"
      >
        <div
          v-for="location in findItem(locations, username)"
          :key="location.key"
          class="
            p-2
            cursor-pointer
            transition
            duration-500
            ease-in-out
            bg-gray-700
            hover:bg-blue-700
          "
          @click="
            (x) => {
              moveTo(location.url, location.name).then(toggleOff);
            }
          "
        >
          <span>{{ location.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import locations from "@/data/Map.js";

let username = ref("");
let dropOpen = ref(false);

function toggleDrop() {
  dropOpen.value = true;
  console.log(findItem(locations, username.value));
}
function toggleOff() {
  dropOpen.value = false;
}
function findItem(items, search) {
  const myItems = [];
  function addToSearch(stuff, prefix) {
    stuff.forEach((x) => {
      if (
        x.name.toLowerCase().includes(search.toLowerCase()) ||
        x.keywords.some((y) => y.toLowerCase().includes(search.toLowerCase()))
      )
        myItems.push({ name: x.name, url: `${prefix}${x.key}` });
      if (x.items && Array.isArray(x.items))
        addToSearch(x.items, `${prefix}${x.key}/`);
    });
  }
  addToSearch(items.items, `/`);
  return myItems;
}
function moveTo(newRoute, newName) {
    username.value = newName
  return navigateTo({
    path: `${newRoute}`,
  });
}
</script>
