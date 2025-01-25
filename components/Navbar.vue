<script setup>
import { useStore } from "vuex";
const menuIcon = ref(false);
const store = useStore();
const allCards = computed(() => store?.getters?.allCards || []);
const handelMen = (value) => {
  menuIcon.value = value;
};
</script>
<template>
  <main class="bg-black text-white text-center py-2 fixed w-full top-0">
    <nav class="flex justify-between container mx-auto">
      <nuxt-link to="/" class="text-xl md:text-2xl">Archive Pages</nuxt-link>
      <!-- <nuxt-link to="/about">about</nuxt-link> -->
      <div
        class="space-y-2 w-[400px] absolute right-48 top-0 bg-white text-black rounded-md p-2"
        v-if="menuIcon"
      >
        <div v-for="(card, index) in allCards" :key="index" class="">
          <nuxt-link :to="`/page/${card.id}`">{{ card.id }}</nuxt-link>
        </div>
      </div>

      <div class="flex gap-2 items-center">
        <NuxtLink to="/about">About</NuxtLink>

        <button @click="handelMen(!menuIcon)">Click Me</button>
      </div>
    </nav>
  </main>
</template>
