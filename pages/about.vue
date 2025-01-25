<template>
  <div class="pt-14">
    <h1>Vuex store {{ store.state.sideBer.name }}</h1>

    <button @click="changeName">click me</button>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
const changeName = () => {
  store.commit("updateName", 10);
};
</script>
<style></style>
