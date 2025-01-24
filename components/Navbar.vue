<script setup>
import { useStore } from "vuex";
const menuIcon = ref(false);
const store = useStore();
const allCards = computed(() => store?.getters?.allCards);
console.log(menuIcon.value);
const handelMen = (value) => {
  menuIcon.value = value;
};
</script>
<template>
  <main class="bg-black text-white text-center py-2 fixed w-full top-0">
    <nav class="flex justify-between container mx-auto">
      <h2 class=" ">Archive Pages</h2>
      <div
        class="space-y-2 w-[400px] absolute right-48 top-0 bg-white text-black rounded-md p-8"
        v-if="menuIcon"
      >
        <div v-for="(card, index) in allCards" :key="index" class="">
          <nuxt-link :to="`${card.id}`">{{ card.id }}</nuxt-link>
        </div>
      </div>

      <div>
        <button @click="handelMen(!menuIcon)">Click Me</button>
      </div>
    </nav>
  </main>
</template>
